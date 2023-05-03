import { IDataSource } from 'src/datasources/interfaces/IDataSource';
import { ApiError } from 'src/errors/ApiError';
import { Product } from '../../domain/models/Product';
import { IProductsListRepository } from './interfaces/IProductsListRepository';
import { ProductTypes } from '../../domain/enums/products';

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
