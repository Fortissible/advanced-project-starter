import RouteNames from '@src/configs/router/router.names';
import { DefaultRouteParam } from '@src/configs/router/router.type';
import PostView from '@src/modules/home/views/posts/posts.view';
import { RouteObject } from 'react-router';

const postsViewRoute = {
  element: <PostView />,
  path: RouteNames.Posts,
} as const satisfies RouteObject;

export type PostsRouteParams = DefaultRouteParam;

export default postsViewRoute;
