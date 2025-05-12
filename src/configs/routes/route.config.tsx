import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { notFoundRoute } from 'libs/ui/templates/not-found-page.route';
import loginRoute from 'src/modules/auth/views/login/login.route';
import registerRoute from 'src/modules/auth/views/register/register.route';
import detailRoute from 'src/modules/detail/detail.route';
import RouteNames from './route.constant';
import RouteTabNavigationConfig from './route.tab-navigation';
import { RouteStackConfig, RouteStackParam } from './route.type';

// #region PROPS
type RouteConfigProps<Routes extends ReadonlyArray<RouteStackConfig>> = {
  initialRouteName: Routes[number]['name'];
  routes: Routes;
};
// #endregion

/**
 * @description
 * Stack navigator. Used to create stack navigation.
 * @returns StackNavigator
 * @see https://reactnavigation.org/docs/stack-navigator/
 */
export const Stack = createNativeStackNavigator<RouteStackParam>();

/**
 * @description
 * Default routes.
 */
export const defaultRoutes = [
  loginRoute,
  registerRoute,
  notFoundRoute,
] as const;

export const authenticatedRoutes = [
  {
    component: RouteTabNavigationConfig,
    name: RouteNames.TabNavigation,
  } as const,
  detailRoute,
  notFoundRoute,
] as const;

export default function RouteConfig<
  RouteType extends ReadonlyArray<RouteStackConfig>,
>({ initialRouteName, routes }: RouteConfigProps<RouteType>) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ animation: 'slide_from_right', headerShown: false }}
    >
      {routes.map(({ component, initialParams, name, options }) => (
        <Stack.Screen
          key={name}
          component={component}
          initialParams={initialParams}
          name={name}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}
