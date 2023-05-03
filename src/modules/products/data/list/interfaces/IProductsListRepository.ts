import { Product } from '../../../domain/models/Product';

export interface IProductsListRepository {
    getList(): Promise<Product[]>,
}
