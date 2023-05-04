import { action, computed, makeObservable, observable, runInAction, toJS } from 'mobx';
import { ValidationError } from 'src/errors/ValidationError';
import { IProductsDetailsRepository } from '../../data/details/interfaces/IProductsDetailsRepository';
import { Product } from '../../domain/models/Product';
import { isValid } from './utils/validation';

export class DetailsViewModel {
  @observable public isLoading: boolean = false;

  @observable private _products: Product[] = [];

  constructor(private repository: IProductsDetailsRepository) {
    makeObservable(this);
  }

  @action private setLoading = (isLoading: boolean): void => {
    if (this.isLoading !== isLoading) {
      this.isLoading = isLoading;
    }
  }

  @computed get products(): Product[] {
    return toJS(this._products);
  }

  @action public getDetails = async (factoryId: number, month: number): Promise<void> => {
    this._products = [];

    if (!isValid(factoryId, month)) {
      throw new ValidationError('ID фабрики или номер месяца не верны!');
    }

    this.setLoading(true);

    try {
      const data = await this.repository.getDetails(factoryId, month);

      if (data) {
        runInAction(() => {
          this._products = data;
        });
      }
    } finally {
      this.setLoading(false);
    }
  }
}
