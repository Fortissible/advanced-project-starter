import { routerConfig } from '@src/configs/router/router.config';
import { RouterProvider } from 'react-router';

export default function NavigationApp() {
  return <RouterProvider router={routerConfig} />;
}
