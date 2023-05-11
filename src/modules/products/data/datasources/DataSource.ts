import { IDataStorage } from 'src/storages/dataStorage/interfaces/IDataStorage';
import { ProductTypes } from 'src/modules/products/domain/enums/products';
import { IProductInput } from 'src/modules/products/domain/interfaces/IProductInput';

import { IDataSource } from './interfaces/IDataSource';

export class DataSource implements IDataSource{
  constructor(private storage: IDataStorage) {}

  private async fetchData() {
    const response = await fetch('http://localhost:3001/products');
    return await response.json();
  }

  private async checkAndSetData(): Promise<void> {
    if (this.storage.isEmpty()) {
      let data = await this.fetchData();
      this.storage.set(data);
    }
  }

  public async getProductList(type: ProductTypes): Promise<IProductInput[]> {
    await this.checkAndSetData();

    return this.storage.get(type);
  }

  public async getProductsByFactoryAndMonth(factoryId: number, month: number): Promise<IProductInput[]> {
    await this.checkAndSetData();

    return this.storage.getByFactoryAndMonth(factoryId, month);
  }
}
