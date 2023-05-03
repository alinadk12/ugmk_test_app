import { IDataStorage } from './interfaces/IDataStorage';
import { IDataItem } from './interfaces/IDataItem';

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
