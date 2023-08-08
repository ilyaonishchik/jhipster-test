import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IOrder, NewOrder } from '../order.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IOrder for edit and NewOrderFormGroupInput for create.
 */
type OrderFormGroupInput = IOrder | PartialWithRequiredKeyOf<NewOrder>;

type OrderFormDefaults = Pick<NewOrder, 'id' | 'products'>;

type OrderFormGroupContent = {
  id: FormControl<IOrder['id'] | NewOrder['id']>;
  amount: FormControl<IOrder['amount']>;
  status: FormControl<IOrder['status']>;
  paymentMethod: FormControl<IOrder['paymentMethod']>;
  shippingAddress: FormControl<IOrder['shippingAddress']>;
  comment: FormControl<IOrder['comment']>;
  customer: FormControl<IOrder['customer']>;
  products: FormControl<IOrder['products']>;
};

export type OrderFormGroup = FormGroup<OrderFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class OrderFormService {
  createOrderFormGroup(order: OrderFormGroupInput = { id: null }): OrderFormGroup {
    const orderRawValue = {
      ...this.getFormDefaults(),
      ...order,
    };
    return new FormGroup<OrderFormGroupContent>({
      id: new FormControl(
        { value: orderRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      amount: new FormControl(orderRawValue.amount, {
        validators: [Validators.required, Validators.min(0)],
      }),
      status: new FormControl(orderRawValue.status, {
        validators: [Validators.required],
      }),
      paymentMethod: new FormControl(orderRawValue.paymentMethod, {
        validators: [Validators.required],
      }),
      shippingAddress: new FormControl(orderRawValue.shippingAddress, {
        validators: [Validators.required],
      }),
      comment: new FormControl(orderRawValue.comment),
      customer: new FormControl(orderRawValue.customer),
      products: new FormControl(orderRawValue.products ?? []),
    });
  }

  getOrder(form: OrderFormGroup): IOrder | NewOrder {
    return form.getRawValue() as IOrder | NewOrder;
  }

  resetForm(form: OrderFormGroup, order: OrderFormGroupInput): void {
    const orderRawValue = { ...this.getFormDefaults(), ...order };
    form.reset(
      {
        ...orderRawValue,
        id: { value: orderRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): OrderFormDefaults {
    return {
      id: null,
      products: [],
    };
  }
}
