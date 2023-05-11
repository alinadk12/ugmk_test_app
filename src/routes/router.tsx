import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFoundError from 'src/pages/errors/NotFoundError';

const ProductList = lazy(() => import('src/pages/products/list/ProductList'));
const ProductDetails = lazy(() => import('src/pages/products/details/ProductDetails'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
    errorElement: <NotFoundError />,
  },
  {
    path: '/details/:factoryId/:month',
    element: <ProductDetails />,
  }
]);
