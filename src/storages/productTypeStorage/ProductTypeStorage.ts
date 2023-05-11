import { ProductTypes } from 'src/modules/products/domain/enums/products';

import { IProductTypeStorage } from './interfaces/IProductTypeStorage';

export class ProductTypeStorage implements IProductTypeStorage {
  private static _instance: IProductTypeStorage;

  private _key = 'product';

  private constructor() {}

  public static getInstance(): IProductTypeStorage {
    if (!ProductTypeStorage._instance) {
      ProductTypeStorage._instance = new ProductTypeStorage();
    }

    return ProductTypeStorage._instance;
  }

  public get(): ProductTypes {
    const item = localStorage.getItem(this._key) as ProductTypes;

    if (item && Object.values(ProductTypes).includes(item)) {
      return item as ProductTypes;
    }

    return ProductTypes.ALL;
  }

  public set(type: ProductTypes): void {
    localStorage.setItem(this._key, type);
  }
}

export const productTypeStorage = ProductTypeStorage.getInstance();
