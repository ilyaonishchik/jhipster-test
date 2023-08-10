import { Component } from '@angular/core';
import { EntityFormComponent } from '../../shared/form/entity-form.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct, NewProduct } from '../product.model';
import { EntityService } from 'app/entities/shared/entity.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';

@Component({
  standalone: true,
  templateUrl: './product-modal.component.html',
  imports: [EntityFormComponent, CommonModule],
  providers: [EntityService],
})
export class ProductModalComponent {
  product?: IProduct;

  constructor(protected activeModal: NgbActiveModal, private productService: ProductService) {}

  close(): void {
    this.activeModal.dismiss();
  }

  submit(value: NewProduct | IProduct): void {
    if (this.product) {
      this.productService.update(value as IProduct).subscribe(() => this.close());
    } else {
      this.productService.create(value as NewProduct).subscribe(() => this.close());
    }
  }
}
