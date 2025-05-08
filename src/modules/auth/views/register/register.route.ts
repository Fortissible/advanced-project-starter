import RouteNames from 'src/configs/routes/route.constant';
import {
  DefaultRouteParam,
  RouteStackConfig,
} from 'src/configs/routes/route.type';
import RegisterView from './register.view';

const registerRoute = {
  component: RegisterView,
  name: RouteNames.Register,
} as const satisfies RouteStackConfig;

export type RegisterRouteParam = DefaultRouteParam;

export default registerRoute;
