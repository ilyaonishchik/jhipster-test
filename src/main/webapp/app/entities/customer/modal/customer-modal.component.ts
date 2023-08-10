import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/form/entity-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntityService } from 'app/entities/shared/entity.service';
import { CommonModule } from '@angular/common';
import { ICustomer, NewCustomer } from '../customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  standalone: true,
  templateUrl: './customer-modal.component.html',
  imports: [EntityFormComponent, CommonModule],
  providers: [EntityService],
})
export class CustomerModalComponent {
  customer?: ICustomer;

  constructor(protected activeModal: NgbActiveModal, private customerService: CustomerService) {}

  close(): void {
    this.activeModal.dismiss();
  }

  submit(value: NewCustomer | ICustomer): void {
    if (this.customer) {
      this.customerService.update(value as ICustomer).subscribe(() => this.close());
    } else {
      this.customerService.create(value as NewCustomer).subscribe(() => this.close());
    }
  }
}
