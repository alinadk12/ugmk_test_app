import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { DataSource } from 'src/datasources/DataSource';
import { dataStorage } from 'src/storages';
import { ProductsDetailsRepository } from '../../data/details/repository';
import { DetailsViewModel } from './viewModel';

const ds = new DataSource(dataStorage);
const repository = new ProductsDetailsRepository(ds);
const viewModel = new DetailsViewModel(repository);

const ProductDetailsContext = createContext<DetailsViewModel>(viewModel);

export const useProductDetailsContext = () => useContext(ProductDetailsContext);

type ProductDetailsProviderProps = {
  children: React.ReactNode,
};

const ProductDetailsProvider: React.FC<ProductDetailsProviderProps> = ({ children }) => {
  return (
    <ProductDetailsContext.Provider value={viewModel}>
      {children}
    </ProductDetailsContext.Provider>
  );
}

export default observer(ProductDetailsProvider);
