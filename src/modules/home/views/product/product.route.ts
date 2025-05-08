import RouteNames from 'src/configs/routes/route.constant';
import {
  DefaultRouteParam,
  RouteStackConfig,
} from 'src/configs/routes/route.type';
import ProductView from './product.view';

const productRoute = {
  component: ProductView,
  name: RouteNames.Products,
} as const satisfies RouteStackConfig;

export type ProductRouteParam = DefaultRouteParam;

export default productRoute;
