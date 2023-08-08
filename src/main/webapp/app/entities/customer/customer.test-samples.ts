import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 30009,
  email: 'Sd@g.ah',
  passwordHash: 'Northeast digital',
  firstName: 'Ryann',
  lastName: 'Gislason',
  age: 60,
  verified: true,
};

export const sampleWithPartialData: ICustomer = {
  id: 17750,
  email: 'e@KE.MTM',
  passwordHash: 'Bohrium',
  firstName: 'George',
  lastName: 'Lubowitz',
  age: 64,
  verified: true,
};

export const sampleWithFullData: ICustomer = {
  id: 19787,
  email: 'A0@4.bTaS',
  passwordHash: 'state',
  firstName: 'Estefania',
  lastName: 'Kohler',
  age: 63,
  verified: false,
  phone: '+375631581603',
};

export const sampleWithNewData: NewCustomer = {
  email: 'qApzAQ@rQBvz5.hg',
  passwordHash: 'oversell District Toyota',
  firstName: 'Elliot',
  lastName: 'Effertz',
  age: 38,
  verified: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
