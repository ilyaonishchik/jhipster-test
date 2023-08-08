import { OrderStatus } from 'app/entities/enumerations/order-status.model';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 10175,
  amount: 5527,
  status: 'CANCELED',
  paymentMethod: 'Account Pop',
  shippingAddress: 'synthesize Polygender technologies',
};

export const sampleWithPartialData: IOrder = {
  id: 31721,
  amount: 8638,
  status: 'DELIVERED',
  paymentMethod: 'Hatchback Dale',
  shippingAddress: 'supposing',
  comment: 'productivity indexing excerpt',
};

export const sampleWithFullData: IOrder = {
  id: 30288,
  amount: 16149,
  status: 'PENDING',
  paymentMethod: 'zowie vivaciously efficient',
  shippingAddress: 'Intranet',
  comment: 'ick plum functional',
};

export const sampleWithNewData: NewOrder = {
  amount: 31258,
  status: 'SUCCEEDED',
  paymentMethod: 'occaecati Montserrat',
  shippingAddress: 'champagne',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
