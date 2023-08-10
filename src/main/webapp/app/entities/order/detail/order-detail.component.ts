import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IOrder } from '../order.model';
import { EntityField } from 'app/entities/shared/entity-field';
import { EntityService } from 'app/entities/shared/entity.service';

@Component({
  standalone: true,
  selector: 'jhi-order-detail',
  templateUrl: './order-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
  providers: [EntityService],
})
export class OrderDetailComponent implements OnInit {
  @Input() order: IOrder | null = null;
  fields: EntityField<IOrder>[] = [];

  constructor(protected activatedRoute: ActivatedRoute, private entityService: EntityService<IOrder>) {}

  ngOnInit(): void {
    this.entityService.getConfig('Order').subscribe(config => (this.fields = config.fields));
  }

  previousState(): void {
    window.history.back();
  }
}
