import { action, computed, makeObservable, observable, runInAction, toJS } from 'mobx';
import { Product } from '../../domain/models/Product';
import { IProductsListRepository } from '../../data/list/interfaces/IProductsListRepository';

export class ProductListViewModel {
    @observable private _products: Product[] = [];

    @observable public isLoading: boolean = false;

    constructor(private repository: IProductsListRepository) {
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
        if (this.isLoading) return;

        this.setLoading(true);

        try {
            const data = await this.repository.getList();

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
