import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IProduct } from '../product.model';
import { EntityService } from 'app/entities/entity.service';
import { EntityField } from 'app/entities/entity-field';

@Component({
  standalone: true,
  selector: 'jhi-product-detail',
  templateUrl: './product-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
  providers: [EntityService],
})
export class ProductDetailComponent implements OnInit {
  @Input() product: IProduct | null = null;
  fields: EntityField<IProduct>[] = [];

  constructor(protected activatedRoute: ActivatedRoute, private entityService: EntityService) {}

  ngOnInit(): void {
    this.entityService.getConfig<IProduct>('Product').subscribe(config => (this.fields = config.fields));
  }

  previousState(): void {
    window.history.back();
  }
}
