import { ICustomer } from 'app/entities/customer/customer.model';
import { IProduct } from 'app/entities/product/product.model';
import { OrderStatus } from 'app/entities/enumerations/order-status.model';

export interface IOrder {
  id: number;
  amount?: number | null;
  status?: keyof typeof OrderStatus | null;
  paymentMethod?: string | null;
  shippingAddress?: string | null;
  comment?: string | null;
  customer?: Pick<ICustomer, 'id'> | null;
  products?: Pick<IProduct, 'id'>[] | null;
}

export type NewOrder = Omit<IOrder, 'id'> & { id: null };
