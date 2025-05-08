import RouteNames from 'src/configs/routes/route.constant';
import {
  DefaultRouteParam,
  RouteStackConfig,
} from 'src/configs/routes/route.type';
import UserView from './user.view';

const userRoute = {
  component: UserView,
  name: RouteNames.Users,
} as const satisfies RouteStackConfig;

export type UserRouteParam = DefaultRouteParam;

export default userRoute;
