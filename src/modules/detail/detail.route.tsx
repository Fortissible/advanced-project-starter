import RouteNames from '@src/configs/router/router.names';
import DetailView from '@src/modules/detail/detail.view';
import { RouteObject } from 'react-router';

export enum DetailType {
  posts = 'posts',
  products = 'products',
  users = 'users',
}

const detailViewRoute = {
  element: <DetailView />,
  path: RouteNames.Detail,
} as const satisfies RouteObject;

export type DetailRouteParams = {
  id: string;
  title: string;
  type: DetailType;
};

export default detailViewRoute;
