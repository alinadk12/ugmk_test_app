import { action, computed, makeObservable, observable, runInAction, toJS } from 'mobx';

import { IProductTypeStorage } from 'src/storages/productTypeStorage/interfaces/IProductTypeStorage';
import { Product } from 'src/modules/products/domain/models/Product';
import { ProductTypes } from 'src/modules/products/domain/enums/products';
import { IProductsListRepository } from 'src/modules/products/data/repositories/list/interfaces/IProductsListRepository';

export class ProductListViewModel {
  @observable private _products: Product[] = [];

  @observable public isLoading: boolean = true;
  @observable public productType: ProductTypes = this.productTypeStorage.get();

  constructor(private repository: IProductsListRepository, private productTypeStorage: IProductTypeStorage) {
    makeObservable(this);
  }

  @computed get products(): Product[] {
    return toJS(this._products);
  }

  @action private setLoading = (isLoading: boolean): void => {
    if (this.isLoading !== isLoading) {
      this.isLoading = isLoading;
    }
  }

  @action public getProductsList = async (): Promise<void> => {
    this._products = [];

    this.setLoading(true);

    try {
      const data = await this.repository.getList(this.productType);

      if (data) {
        runInAction(() => {
          this._products = data;
        });
      }
    } finally {
      this.setLoading(false);
    }
  }

  @action public changeProductType = async (type: ProductTypes): Promise<void> => {
    if (type !== this.productType) {
      this.productType = type;
      this.productTypeStorage.set(type);
    }

    await this.getProductsList();
  }
}
