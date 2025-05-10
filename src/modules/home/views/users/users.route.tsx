import RouteNames from '@src/configs/router/router.names';
import { DefaultRouteParam } from '@src/configs/router/router.type';
import UserView from '@src/modules/home/views/users/users.view';
import { RouteObject } from 'react-router';

const usersViewRoute = {
  element: <UserView />,
  path: RouteNames.Users,
} as const satisfies RouteObject;

export type UsersRouteParams = DefaultRouteParam;

export default usersViewRoute;
