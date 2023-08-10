import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ICustomer } from '../customer.model';
import { EntityService } from 'app/entities/shared/entity.service';
import { EntityField } from 'app/entities/shared/entity-field';

@Component({
  standalone: true,
  selector: 'jhi-customer-detail',
  templateUrl: './customer-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
  providers: [EntityService],
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: ICustomer | null = null;
  fields: EntityField<ICustomer>[] = [];

  constructor(protected activatedRoute: ActivatedRoute, private entityService: EntityService<ICustomer>) {}

  ngOnInit(): void {
    this.entityService.getConfig('Customer').subscribe(config => (this.fields = config.fields));
  }

  previousState(): void {
    window.history.back();
  }
}
