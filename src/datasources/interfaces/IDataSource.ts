import { ProductTypes } from '../../modules/products/domain/enums/products';
import { IProductInput } from '../../modules/products/domain/interfaces/IProductInput';

export interface IDataSource {
  getProductList(type: ProductTypes): Promise<IProductInput[]>,
}
