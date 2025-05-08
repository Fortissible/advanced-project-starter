import RouteNames from 'src/configs/routes/route.constant';
import {
  DefaultRouteParam,
  RouteStackConfig,
} from 'src/configs/routes/route.type';
import PostView from './post.view';

const postRoute = {
  component: PostView,
  name: RouteNames.Posts,
} as const satisfies RouteStackConfig;

export type PostRouteParam = DefaultRouteParam;

export default postRoute;
