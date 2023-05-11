import { Product } from 'src/modules/products/domain/models/Product';

export interface IProductsDetailsRepository {
  getDetails(factoryId: number, month: number): Promise<Product[]>,
}
