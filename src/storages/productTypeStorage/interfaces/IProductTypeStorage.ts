import { ProductTypes } from '../../../modules/products/domain/enums/products';

export interface IProductTypeStorage {
  get(): ProductTypes,
  set(type: ProductTypes): void,
}
