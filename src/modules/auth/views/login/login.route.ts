import RouteNames from 'src/configs/routes/route.constant';
import {
  DefaultRouteParam,
  RouteStackConfig,
} from 'src/configs/routes/route.type';
import LoginView from './login.view';

const loginRoute = {
  component: LoginView,
  name: RouteNames.Login,
} as const satisfies RouteStackConfig;

export type LoginRouteParam = DefaultRouteParam;

export default loginRoute;
