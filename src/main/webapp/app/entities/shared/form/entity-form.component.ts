import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityField } from '../entity-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntityFormService } from './entity-form.service';
import { EntityService } from '../entity.service';

@Component({
  standalone: true,
  selector: 'jhi-entity-form',
  templateUrl: './entity-form.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class EntityFormComponent<T> implements OnInit {
  @Input() filename = '';
  @Input() entity?: T;
  @Output() submitEmitter = new EventEmitter();
  fields: EntityField<T>[] = [];
  form = new FormGroup({});

  constructor(private entityService: EntityService<T>, private entityFormService: EntityFormService<T>) {}

  ngOnInit(): void {
    this.entityService.getConfig(this.filename).subscribe(config => {
      this.fields = config.fields;
      this.form = this.entityFormService.createFormGroup(this.fields);
      this.form.addControl('id', new FormControl());
      if (this.entity) {
        this.form.reset({ ...this.entity });
      }
    });
  }

  submit(): void {
    this.submitEmitter.emit(this.form.value);
  }
}
