import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityConfig } from './entity-config';
import { Injectable } from '@angular/core';

@Injectable()
export class EntityService<T> {
  private url = 'http://localhost:80/static';

  constructor(private httpClient: HttpClient) {}

  getConfig(entityName: string): Observable<EntityConfig<T>> {
    return this.httpClient.get<EntityConfig<T>>(`${this.url}/${entityName}.json`);
  }

  create(body: Omit<T, 'id'>): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(this.url, body, { observe: 'response' });
  }
}
