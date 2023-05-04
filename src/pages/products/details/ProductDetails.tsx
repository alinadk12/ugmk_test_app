import React from 'react';
import MainLayout from 'src/layouts/main/MainLayout';
import ErrorBoundary from 'src/components/errors/ErrorBoundary';
import DetailsView, { ProductDetailsProvider } from 'src/modules/products/presentation/details';

const ProductDetails: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainLayout showHeader>
        <ProductDetailsProvider>
          <DetailsView />
        </ProductDetailsProvider>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default ProductDetails;
