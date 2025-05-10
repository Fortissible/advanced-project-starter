import RouteNames from '@src/configs/router/router.names';
import { DefaultRouteParam } from '@src/configs/router/router.type';
import LoginView from '@src/modules/auth/views/login/login.view';
import { RouteObject } from 'react-router';

const loginViewRoute = {
  element: <LoginView />,
  path: RouteNames.Login,
} as const satisfies RouteObject;

export type LoginRouteParams = DefaultRouteParam;

export default loginViewRoute;
