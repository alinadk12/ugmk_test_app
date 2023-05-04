import { Product } from '../../../domain/models/Product';

export interface IProductsDetailsRepository {
  getDetails(factoryId: number, month: number): Promise<Product[]>,
}
