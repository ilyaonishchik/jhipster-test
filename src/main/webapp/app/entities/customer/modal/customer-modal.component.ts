import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/form/entity-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntityService } from 'app/entities/shared/entity.service';
import { CommonModule } from '@angular/common';
import { ICustomer } from '../customer.model';

@Component({
  standalone: true,
  templateUrl: './customer-modal.component.html',
  imports: [EntityFormComponent, CommonModule],
  providers: [EntityService],
})
export class CustomerModalComponent {
  customer?: ICustomer;

  constructor(protected activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.dismiss();
  }

  submit(): void {
    alert('submit');
  }
}
