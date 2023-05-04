import { IDataItem } from './IDataItem';

export interface IDataStorage {
  get(type: string): IDataItem[],
  getByFactoryAndMonth(factoryId: number, month: number): IDataItem[],
  set(data: IDataItem[]): void,
  isEmpty(): boolean,
}
