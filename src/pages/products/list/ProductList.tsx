import React from 'react';
import MainLayout from 'src/layouts/main/MainLayout';
import ListView from 'src/modules/products/presentation/list';

const ProductList: React.FC = () => {
  return (
    <MainLayout>
      <ListView />
    </MainLayout>
  );
}

export default ProductList;
