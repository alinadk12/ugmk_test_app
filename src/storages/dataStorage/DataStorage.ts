import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DATE_FORMAT } from 'src/constants/date';

import { IDataStorage } from './interfaces/IDataStorage';
import { IDataItem } from './interfaces/IDataItem';

dayjs.extend(customParseFormat);

class DataStorage implements IDataStorage{
  private static _instance: IDataStorage;

  private _data: IDataItem[] = [];

  private constructor() {}

  public static getInstance(): IDataStorage {
    if (!DataStorage._instance) {
      DataStorage._instance = new DataStorage();
    }

    return DataStorage._instance;
  }

  public get(type: string): IDataItem[] {
    if (type === 'all') {
      return this._data;
    }

    return this.getListByProductType(type);
  }

  public getByFactoryAndMonth(factoryId: number, month: number): IDataItem[] {
    return this._data.filter((item) => (
      item.factory_id === factoryId && dayjs(item.date, DATE_FORMAT).get('month') === month - 1
    ));
  }

  public set(data: IDataItem[]) {
    this._data = data;
  }

  public isEmpty(): boolean {
    return this._data.length === 0;
  }

  private getListByProductType(type: string): IDataItem[] {
    return this._data.map((item) => {
      if (type in item) {
        return ({
          id: item.id,
          factory_id: item.factory_id,
          date: item.date,
          [type]: item[type as keyof IDataItem],
        })
      }

      return item;
    });
  }
}

export const dataStorage = DataStorage.getInstance();
