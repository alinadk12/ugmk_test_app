import { Product } from '../../../domain/models/Product';
import { ProductTypes } from '../../../domain/enums/products';

export interface IProductsListRepository {
  getList(type: ProductTypes): Promise<Product[]>,
}
