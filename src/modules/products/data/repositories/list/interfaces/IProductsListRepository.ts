import { Product } from 'src/modules/products/domain/models/Product';
import { ProductTypes } from 'src/modules/products/domain/enums/products';

export interface IProductsListRepository {
  getList(type: ProductTypes): Promise<Product[]>,
}
