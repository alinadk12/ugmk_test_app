import { ProductTypes } from 'src/modules/products/domain/enums/products';
import { IProductInput } from 'src/modules/products/domain/interfaces/IProductInput';

export interface IDataSource {
  getProductList(type: ProductTypes): Promise<IProductInput[]>,
  getProductsByFactoryAndMonth(factoryId: number, month: number): Promise<IProductInput[]>,
}
