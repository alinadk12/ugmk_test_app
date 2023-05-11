import { IDataSource } from 'src/modules/products/data/datasources/interfaces/IDataSource';
import { ApiError } from 'src/errors/ApiError';
import { Product } from 'src/modules/products/domain/models/Product';
import { ProductTypes } from 'src/modules/products/domain/enums/products';

import { IProductsListRepository } from './interfaces/IProductsListRepository';

export class ProductsListRepository implements IProductsListRepository {
  constructor(private ds: IDataSource) {}

  public async getList(type: ProductTypes): Promise<Product[]> {
    try {
      const response = await this.ds.getProductList(type);

      if (response) {
        return response.map((item) => new Product(item));
      }

      return [];
    } catch (error) {
      throw new ApiError(error);
    }
  }
}
