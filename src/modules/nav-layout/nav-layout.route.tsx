import githubSearchRoute from '@src/modules/home/views/github-search/github-search.route';
import postsViewRoute from '@src/modules/home/views/posts/posts.route';
import productsViewRoute from '@src/modules/home/views/products/products.route';
import usersViewRoute from '@src/modules/home/views/users/users.route';
import NavLayout from '@src/modules/nav-layout/nav-layout.view';
import { RouteObject } from 'react-router';

export const tabNavViewRoute: RouteObject = {
  element: <NavLayout />,
  children: [
    {
      index: true,
      ...postsViewRoute,
    },
    usersViewRoute,
    postsViewRoute,
    productsViewRoute,
    githubSearchRoute,
  ],
};
