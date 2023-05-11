import React from 'react';

import MainLayout from 'src/layouts/main/MainLayout';
import ErrorBoundary from 'src/components/errors/ErrorBoundary';
import ListView, { ProductListProvider } from 'src/modules/products/presentation/list';

const ProductList: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainLayout>
        <ProductListProvider>
          <ListView />
        </ProductListProvider>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default ProductList;
