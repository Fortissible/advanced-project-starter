import RouteNames from 'src/configs/routes/route.constant';
import {
  DefaultRouteParam,
  RouteStackConfig,
} from 'src/configs/routes/route.type';
import NotFoundScreen from './not-found-page.view';

export const notFoundRoute = {
  name: RouteNames.NotFound,
  component: NotFoundScreen,
} as const satisfies RouteStackConfig;
export type NotFoundRouteParam = DefaultRouteParam;
