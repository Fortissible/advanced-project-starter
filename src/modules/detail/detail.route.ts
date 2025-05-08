import RouteNames from 'src/configs/routes/route.constant';
import { RouteStackConfig } from 'src/configs/routes/route.type';
import DetailView from './detail.view';

export enum DetailType {
  posts = 'posts',
  products = 'products',
  users = 'users',
}

const detailRoute = {
  component: DetailView,
  name: RouteNames.Detail,
} as const satisfies RouteStackConfig;

export type DetailRouteParam = {
  id: string;
  title: string;
  type: DetailType;
};

export default detailRoute;
