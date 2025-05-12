import useAuthStore from '@src/hooks/use-auth-store.hook';
import loginViewRoute from '@src/modules/auth/views/login/login.route';
import registerViewRoute from '@src/modules/auth/views/register/register.route';
import detailViewRoute from '@src/modules/detail/detail.route';
import { tabNavViewRoute } from '@src/modules/nav-layout/nav-layout.route';
import NotFoundPage from '@src/modules/not-found/not-found.view';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from 'react-router';

function UnauthRoute() {
  const { accessToken, refreshToken, hydrated } = useAuthStore().state;

  if (!hydrated) {
    return (
      <div className="flex min-w-screen min-h-screen items-center justify-center bg-white">
        <div className="flex w-screen justify-center items-center px-8">
          <div className="pr-4">Loading...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500" />
        </div>
      </div>
    );
  }

  const isLoggedOut = !accessToken && !refreshToken;
  return isLoggedOut ? <Outlet /> : <Navigate to="/posts" replace />;
}

function PrivateRoute() {
  const { accessToken, refreshToken, hydrated } = useAuthStore().state;

  if (!hydrated) {
    return (
      <div className="flex min-w-screen min-h-screen items-center justify-center bg-white">
        <div className="flex w-screen justify-center items-center px-8">
          <div className="pr-4">Loading...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500" />
        </div>
      </div>
    );
  }

  const isLoggedIn = !!accessToken && !!refreshToken;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

function Redirector() {
  const { accessToken, refreshToken, hydrated } = useAuthStore().state;

  if (!hydrated) {
    return (
      <div className="flex min-w-screen min-h-screen items-center justify-center bg-white">
        <div className="flex w-screen justify-center items-center px-8">
          <div className="pr-4">Loading...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500" />
        </div>
      </div>
    );
  }

  const isLoggedIn = !!accessToken && !!refreshToken;
  return <Navigate to={isLoggedIn ? '/posts' : '/login'} replace />;
}

export const routes: RouteObject[] = [
  // Entry Points
  {
    path: '/',
    element: <Redirector />,
  },

  // Base Route (Unauth)
  {
    element: <UnauthRoute />,
    children: [loginViewRoute, registerViewRoute],
  },

  // Protected Route (Auth Needed)
  {
    element: <PrivateRoute />,
    children: [detailViewRoute, tabNavViewRoute],
  },

  {
    path: '*',
    element: <NotFoundPage />, // fallback for unknown paths
  },
];

export const routerConfig = createBrowserRouter(routes);
