import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityConfig } from './entity-config';
import { Injectable } from '@angular/core';

@Injectable()
export class EntityService<T> {
  private staticUrl = 'http://localhost:80/static';

  constructor(private httpClient: HttpClient) {}

  getConfig(entityName: string): Observable<EntityConfig<T>> {
    return this.httpClient.get<EntityConfig<T>>(`${this.staticUrl}/${entityName}.json`);
  }
}
