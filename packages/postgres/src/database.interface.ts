import { DataSourceOptions } from 'typeorm';

export interface DbConfig {
  entities: DataSourceOptions['entities'];
}