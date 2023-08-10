import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EntityField } from '../entity-field';

@Injectable({ providedIn: 'root' })
export class EntityFormService<T> {
  createFormGroup(fields: EntityField<T>[]): FormGroup {
    const formGroup = new FormGroup({});
    fields.forEach(field => formGroup.addControl(String(field.fieldName), this.createFormControl(field)));
    return formGroup;
  }

  createFormControl(field: EntityField<T>): FormControl {
    let formControl;
    switch (field.fieldType) {
      case 'String':
        formControl = new FormControl<string>('');
        break;
      case 'BigDecimal':
      case 'Integer':
        formControl = new FormControl<number>(0);
        break;
      case 'Boolean':
        formControl = new FormControl<boolean>(false);
        break;
      default:
        formControl = new FormControl<string>('');
        break;
    }
    formControl.addValidators(this.createValidators(field));
    return formControl;
  }

  private createValidators(field: EntityField<T>): ((control: AbstractControl<any, any>) => ValidationErrors | null)[] {
    const validators = [];
    if (field.fieldValidateRules?.includes('required')) {
      validators.push(Validators.required);
    }
    if (field.fieldType === 'String' && field.fieldValidateRules?.includes('pattern')) {
      validators.push(Validators.pattern(field.fieldValidateRulesPattern!));
    }
    if (field.fieldType === 'Integer' && field.fieldValidateRules?.includes('min')) {
      validators.push(Validators.min(Number(field.fieldValidateRulesMin)));
    }
    if (field.fieldType === 'Integer' && field.fieldValidateRules?.includes('max')) {
      validators.push(Validators.max(Number(field.fieldValidateRulesMax)));
    }
    return validators;
  }
}
