import { IDataStore } from 'src/storages/interfaces/IDataStore';
import { IDataSource, DataType } from './interfaces/IDataSource';

export class DataSource implements IDataSource{
  constructor(private store: IDataStore) {}

  private async fetchData() {
    const response = await fetch('http://localhost:3001/products');
    return await response.json();
  }

  public async getProductList(): Promise<DataType[]> {
    let data = this.store.get();

    if (data.length === 0) {
      data = await this.fetchData();
      this.store.set(data);
    }

    return data;
  }
}
