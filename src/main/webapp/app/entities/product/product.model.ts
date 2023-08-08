import { IOrder } from 'app/entities/order/order.model';

export interface IProduct {
  id: number;
  name?: string | null;
  category?: string | null;
  price?: number | null;
  quantity?: number | null;
  description?: string | null;
  orders?: Pick<IOrder, 'id'>[] | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
