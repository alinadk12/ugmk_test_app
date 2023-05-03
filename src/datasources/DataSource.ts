import { IDataStorage } from 'src/storages/dataStorage/interfaces/IDataStorage';
import { IDataSource } from './interfaces/IDataSource';
import { ProductTypes } from '../modules/products/domain/enums/products';
import { IProductInput } from '../modules/products/domain/interfaces/IProductInput';

export class DataSource implements IDataSource{
  constructor(private storage: IDataStorage) {}

  private async fetchData() {
    const response = await fetch('http://localhost:3001/products');
    return await response.json();
  }

  public async getProductList(type: ProductTypes): Promise<IProductInput[]> {
    if (this.storage.isEmpty()) {
      let data = await this.fetchData();
      this.storage.set(data);
    }

    return this.storage.get(type);
  }
}
