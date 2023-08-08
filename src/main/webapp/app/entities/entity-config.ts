import { EntityField } from './entity-field';

export type EntityConfig<T> = {
  applications: string;
  changelogDate: string;
  entityTableName: string;
  fields: EntityField<T>[];
  name: string;
  relationships: unknown[];
  searchEngine: string;
};
