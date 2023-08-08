import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 25851,
  name: 'quod Elias proactive',
  category: 'programming',
  price: 14846,
  quantity: 25960,
};

export const sampleWithPartialData: IProduct = {
  id: 15724,
  name: 'And Baby 24/7',
  category: 'Thailand Bicycle',
  price: 11960,
  quantity: 16969,
};

export const sampleWithFullData: IProduct = {
  id: 17887,
  name: 'Product Oganesson',
  category: 'Borders',
  price: 13315,
  quantity: 14835,
  description: 'Hybrid male',
};

export const sampleWithNewData: NewProduct = {
  name: 'Latin',
  category: 'laborum',
  price: 19509,
  quantity: 3308,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
