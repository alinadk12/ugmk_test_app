import { ApiError } from 'src/errors/ApiError';
import { IDataSource } from 'src/datasources/interfaces/IDataSource';
import { IProductsDetailsRepository } from './interfaces/IProductsDetailsRepository';
import { Product } from '../../domain/models/Product';

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
