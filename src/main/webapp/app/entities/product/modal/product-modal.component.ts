import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/form/entity-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../product.model';
import { EntityService } from 'app/entities/shared/entity.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './product-modal.component.html',
  imports: [EntityFormComponent, CommonModule],
  providers: [EntityService],
})
export class ProductModalComponent {
  product?: IProduct;

  constructor(protected activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.dismiss();
  }

  submit(): void {
    alert('submit');
  }
}
