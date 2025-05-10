import RouteNames from '@src/configs/router/router.names';
import { DefaultRouteParam } from '@src/configs/router/router.type';
import ProductView from '@src/modules/home/views/products/products.view';
import { RouteObject } from 'react-router';

const productsViewRoute = {
  element: <ProductView />,
  path: RouteNames.Products,
} as const satisfies RouteObject;

export type ProductsRouteParams = DefaultRouteParam;

export default productsViewRoute;
