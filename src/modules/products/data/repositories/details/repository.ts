import { ApiError } from 'src/errors/ApiError';
import { IDataSource } from 'src/modules/products/data/datasources/interfaces/IDataSource';
import { Product } from 'src/modules/products/domain/models/Product';

import { IProductsDetailsRepository } from './interfaces/IProductsDetailsRepository';

export class ProductsDetailsRepository implements IProductsDetailsRepository {
  constructor(private ds: IDataSource) {}

  public async getDetails(factoryId: number, month: number): Promise<Product[]> {
    try {
      const response = await this.ds.getProductsByFactoryAndMonth(factoryId, month);

      if (response) {
        return response.map((item) => new Product(item));
      }

      return [];
    } catch (error) {
      throw new ApiError(error);
    }
  }
}
