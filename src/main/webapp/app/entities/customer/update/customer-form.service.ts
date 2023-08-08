import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ICustomer, NewCustomer } from '../customer.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ICustomer for edit and NewCustomerFormGroupInput for create.
 */
type CustomerFormGroupInput = ICustomer | PartialWithRequiredKeyOf<NewCustomer>;

type CustomerFormDefaults = Pick<NewCustomer, 'id' | 'verified'>;

type CustomerFormGroupContent = {
  id: FormControl<ICustomer['id'] | NewCustomer['id']>;
  email: FormControl<ICustomer['email']>;
  passwordHash: FormControl<ICustomer['passwordHash']>;
  firstName: FormControl<ICustomer['firstName']>;
  lastName: FormControl<ICustomer['lastName']>;
  age: FormControl<ICustomer['age']>;
  verified: FormControl<ICustomer['verified']>;
  phone: FormControl<ICustomer['phone']>;
};

export type CustomerFormGroup = FormGroup<CustomerFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class CustomerFormService {
  createCustomerFormGroup(customer: CustomerFormGroupInput = { id: null }): CustomerFormGroup {
    const customerRawValue = {
      ...this.getFormDefaults(),
      ...customer,
    };
    return new FormGroup<CustomerFormGroupContent>({
      id: new FormControl(
        { value: customerRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      email: new FormControl(customerRawValue.email, {
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')],
      }),
      passwordHash: new FormControl(customerRawValue.passwordHash, {
        validators: [Validators.required],
      }),
      firstName: new FormControl(customerRawValue.firstName, {
        validators: [Validators.required],
      }),
      lastName: new FormControl(customerRawValue.lastName, {
        validators: [Validators.required],
      }),
      age: new FormControl(customerRawValue.age, {
        validators: [Validators.required, Validators.min(18), Validators.max(100)],
      }),
      verified: new FormControl(customerRawValue.verified, {
        validators: [Validators.required],
      }),
      phone: new FormControl(customerRawValue.phone, {
        validators: [Validators.pattern('^\\+375\\d{9}$')],
      }),
    });
  }

  getCustomer(form: CustomerFormGroup): ICustomer | NewCustomer {
    return form.getRawValue() as ICustomer | NewCustomer;
  }

  resetForm(form: CustomerFormGroup, customer: CustomerFormGroupInput): void {
    const customerRawValue = { ...this.getFormDefaults(), ...customer };
    form.reset(
      {
        ...customerRawValue,
        id: { value: customerRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): CustomerFormDefaults {
    return {
      id: null,
      verified: false,
    };
  }
}
