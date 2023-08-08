import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'customer',
        data: { pageTitle: 'Customers' },
        loadChildren: () => import('./customer/customer.routes'),
      },
      {
        path: 'order',
        data: { pageTitle: 'Orders' },
        loadChildren: () => import('./order/order.routes'),
      },
      {
        path: 'product',
        data: { pageTitle: 'Products' },
        loadChildren: () => import('./product/product.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
