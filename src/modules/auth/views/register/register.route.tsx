import RouteNames from '@src/configs/router/router.names';
import { DefaultRouteParam } from '@src/configs/router/router.type';
import RegisterView from '@src/modules/auth/views/register/register.view';
import { RouteObject } from 'react-router';

const registerViewRoute = {
  element: <RegisterView />,
  path: RouteNames.Register,
} as const satisfies RouteObject;

export type RegisterRouteParams = DefaultRouteParam;

export default registerViewRoute;
