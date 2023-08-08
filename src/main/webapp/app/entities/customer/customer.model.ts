export interface ICustomer {
  id: number;
  email?: string | null;
  passwordHash?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  age?: number | null;
  verified?: boolean | null;
  phone?: string | null;
}

export type NewCustomer = Omit<ICustomer, 'id'> & { id: null };
