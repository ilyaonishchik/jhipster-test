import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityConfig } from './entity-config';
import { Injectable } from '@angular/core';

@Injectable()
export class EntityService {
  private url = 'http://localhost:80/static';

  constructor(private httpClient: HttpClient) {}

  getConfig<T>(entityName: string): Observable<EntityConfig<T>> {
    return this.httpClient.get<EntityConfig<T>>(`${this.url}/${entityName}.json`);
  }
}
