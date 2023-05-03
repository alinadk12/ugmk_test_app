import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from 'src/storages/DataStore';
import { DataSource } from 'src/datasources/DataSource';
import { ProductsListRepository } from '../../data/list/repository';
import { ProductListViewModel } from './viewModel';

const ds = new DataSource(store);
const repository = new ProductsListRepository(ds);
const viewModel = new ProductListViewModel(repository);

const ProductListContext = createContext<ProductListViewModel>(viewModel);

export const useProductListContext = () => useContext(ProductListContext);

type ProductListProviderProps = {
    children: React.ReactNode,
};

const ProductListProvider: React.FC<ProductListProviderProps> = ({ children }) => {
    return (
        <ProductListContext.Provider value={viewModel}>
            {children}
        </ProductListContext.Provider>
    );
}

export default observer(ProductListProvider);
