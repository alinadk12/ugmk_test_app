import { IDataStore, DataType } from './interfaces/IDataStore';

class DataStore implements IDataStore{
    private static _instance: IDataStore;

    private _data: DataType[] = [];

    private constructor() {}

    public static getInstance(): IDataStore {
        if (!DataStore._instance) {
            DataStore._instance = new DataStore();
        }

        return DataStore._instance;
    }

    public get(): DataType[] {
        return this._data;
    }

    public set(data: DataType[]) {
        this._data = data;
    }
}

export const store = DataStore.getInstance();
