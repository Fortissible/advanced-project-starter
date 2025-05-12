import { RouteProp } from '@react-navigation/core/lib/typescript/src';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src';
import { FunctionComponent } from 'react';
import { StackAnimationTypes } from 'react-native-screens/lib/typescript';
import { LoginRouteParam } from 'src/modules/auth/views/login/login.route';
import { RegisterRouteParam } from 'src/modules/auth/views/register/register.route';
import { DetailRouteParam } from 'src/modules/detail/detail.route';
import { PostRouteParam } from 'src/modules/home/views/post/post.route';
import { ProductRouteParam } from 'src/modules/home/views/product/product.route';
import { UserRouteParam } from 'src/modules/home/views/user/user.route';
import RouteNames from './route.constant';

export type RouteStackConfig = {
  component: FunctionComponent;
  initialParams?: RouteStackParam[RouteStackConfig['name']];
  name: keyof RouteStackParam;
  options?: {
    animation?: StackAnimationTypes | undefined;
    isTabBarItem?: boolean;
    presentation?:
      | 'card'
      | 'modal'
      | 'transparentModal'
      | 'containedModal'
      | 'containedTransparentModal'
      | 'fullScreenModal'
      | 'formSheet'
      | undefined;
    tabBarIcon?: (props: { focused: boolean }) => React.ReactNode;
    tabBarLabel?: string;
    tabBarTestID?: string;
  };
};

export type DefaultRouteParam = undefined;

export type RouteStackParam = {
  [RouteNames.Login]: LoginRouteParam;
  [RouteNames.Register]: RegisterRouteParam;
  [RouteNames.Detail]: DetailRouteParam;
  [RouteNames.Posts]: PostRouteParam;
  [RouteNames.Products]: ProductRouteParam;
  [RouteNames.Users]: UserRouteParam;
  [RouteNames.TabNavigation]:
    | { params: PostRouteParam; screen: RouteNames.Posts }
    | { params: ProductRouteParam; screen: RouteNames.Products }
    | { params: UserRouteParam; screen: RouteNames.Users };
  [RouteNames.NotFound]: undefined;
};

export type Route<T extends keyof RouteStackParam> = {
  route: RouteProp<RouteStackParam, T>;
};

export type UseNavigation = NativeStackNavigationProp<RouteStackParam>;
