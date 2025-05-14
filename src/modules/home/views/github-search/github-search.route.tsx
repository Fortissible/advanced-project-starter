import RouteNames from '@src/configs/router/router.names';
import { DefaultRouteParam } from '@src/configs/router/router.type';
import GithubSearchView from '@src/modules/home/views/github-search/github-search.view';
import { RouteObject } from 'react-router';

const githubSearchRoute = {
  element: <GithubSearchView />,
  path: RouteNames.GithubSearch,
} as const satisfies RouteObject;

export type PostsRouteParams = DefaultRouteParam;

export default githubSearchRoute;
