import loginViewRoute from '@src/modules/auth/views/login/login.route';
import registerViewRoute from '@src/modules/auth/views/register/register.route';
import detailViewRoute from '@src/modules/detail/detail.route';
import { tabNavViewRoute } from '@src/modules/nav-layout/nav-layout.route';
import { createBrowserRouter, RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  loginViewRoute,
  registerViewRoute,
  detailViewRoute,
  tabNavViewRoute,
];

export const routerConfig = createBrowserRouter(routes);
