export type DataType = Record<string, string | number | null>;

export interface IDataSource {
    getProductList(): Promise<DataType[]>,
}
