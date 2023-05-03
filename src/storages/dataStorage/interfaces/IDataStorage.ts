import { IDataItem } from './IDataItem';

export interface IDataStorage {
  get(type: string): IDataItem[],
  set(data: IDataItem[]): void,
  isEmpty(): boolean,
}
