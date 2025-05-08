// AppNavigator.tsx
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React, { useMemo } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RouteConfig, {
  authenticatedRoutes,
  defaultRoutes,
} from 'src/configs/routes/route.config';
import RouteNames from 'src/configs/routes/route.constant';
import { RouteStackParam } from 'src/configs/routes/route.type';
import useTokenStore from 'src/hooks/use-token-store.hook';

export const linking = {
  prefixes: ['http://localhost:8081', 'https://your-app.web.app'], // adjust
  config: {
    screens: {
      [RouteNames.Login]: 'login',
      [RouteNames.Register]: 'register',
      [RouteNames.Detail]: 'detail/:type/:id',
      [RouteNames.TabNavigation]: {
        screens: {
          [RouteNames.Posts]: 'posts',
          [RouteNames.Products]: 'products',
          [RouteNames.Users]: 'users',
        },
      },
    },
  },
};

export const navigationRef = createNavigationContainerRef<RouteStackParam>();

export const AppNavigator = () => {
  // Get this real from storage services
  const { hydrated, refreshToken, accessToken } = useTokenStore();
  const areStoresHydrated = hydrated;
  const isAuthenticated = refreshToken && accessToken;

  /**
   * TODO: Check token validity and expiration, if valid continue,
   * but if expire then hit refresh token API
   */

  const initialRouteName = useMemo(() => {
    if (!areStoresHydrated) {
      return RouteNames.Login;
    }

    if (!isAuthenticated) {
      return RouteNames.Login;
    }

    return RouteNames.TabNavigation;
  }, [areStoresHydrated, isAuthenticated]);

  // Loading screen while store is being hydrated
  if (!areStoresHydrated) {
    return (
      <SafeAreaProvider>
        <View className="flex-1 items-center justify-center">
          <Text className="text-3xl font-bold text-blue-600 mb-6">
            Hydrating...
          </Text>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <RouteConfig
          initialRouteName={initialRouteName}
          routes={
            isAuthenticated && areStoresHydrated
              ? authenticatedRoutes
              : defaultRoutes
          }
        />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
