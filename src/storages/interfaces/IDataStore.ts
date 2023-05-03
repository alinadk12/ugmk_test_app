export type DataType = Record<string, string | number | null>;

export interface IDataStore {
    get(): DataType[],
    set(data: DataType[]): void,
}
