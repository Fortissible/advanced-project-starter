import {
  BottomTabBar,
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { classed } from '@tw-classed/react';
import { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import tokenStore from 'src/apps/store/auth-store.app';
import localeStore from 'src/apps/store/locale-store.app';
import useTranslation from 'src/hooks/use-translation.hook';
import postRoute from 'src/modules/home/views/post/post.route';
import productRoute from 'src/modules/home/views/product/product.route';
import userRoute from 'src/modules/home/views/user/user.route';
import { LocaleOptions } from '../locale/locale.type';
import RouteNames from './route.constant';
import { RouteStackConfig, UseNavigation } from './route.type';

export const tabRouteNameToLabelMap = {
  [RouteNames.Posts]: 'dashboard.dashboard-title',
  [RouteNames.Users]: 'shopping-list.title',
  [RouteNames.Products]: 'recommendations.recommendations-title',
};

const Stack = createBottomTabNavigator();

type BottomTabNavigationOptions = {
  options: {
    coachmark?: {
      description: string;
      order: number;
      title: string;
    };
    isTabBarItem?: boolean;
    tabBarIcon?: (props: { focused: boolean }) => React.ReactNode;
    tabBarLabel?: string;
    tabBarTestID: string;
  };
};

const handleTabBar = ({
  descriptors,
  navigation,
  state,
  insets,
}: BottomTabBarProps) => {
  const menus = state.routes.map((route, index) => {
    const descriptor = descriptors[route.key];
    const options = descriptor.options as Partial<
      BottomTabNavigationOptions['options']
    >;
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        canPreventDefault: true,
        target: route.key,
        type: 'tabPress',
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    };

    return {
      coachmark: options.coachmark,
      icon: options.tabBarIcon,
      isFocused,
      key: index,
      name: route.name,
      onPress,
      testID: options?.tabBarTestID ?? '',
      title:
        typeof options?.tabBarLabel === 'string' ? options.tabBarLabel : '',
    };
  });

  return (
    <BottomTabBar
      descriptors={descriptors}
      navigation={navigation}
      state={state}
      insets={insets}
    />
  );
};

type Props = {
  initialRouteName?: string;
  routes?: RouteStackConfig[];
};

export default function RouteTabNavigationConfig({
  initialRouteName = RouteNames.Posts,
  routes = [postRoute, productRoute, userRoute],
}: Props) {
  const [isEnabled, setIsEnabled] = useState(
    localeStore.state.localeOptions == LocaleOptions.EN ? true : false,
  );

  const { t } = useTranslation();
  const navigation = useNavigation<UseNavigation>();
  const StyledSwitch = classed(Switch);

  const renderHeaderRight = () => (
    <View className="flex-row items-center justify-center p-4 space-x-2">
      <Text className="text-lg">Id</Text>

      <StyledSwitch
        value={isEnabled}
        onValueChange={(value: boolean) => {
          setIsEnabled(value);
          localeStore.actions.storeLocaleOptions(
            value ? LocaleOptions.EN : LocaleOptions.ID,
          );
        }}
        trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
        thumbColor={isEnabled ? '#facc15' : '#f9fafb'}
        ios_backgroundColor="#3e3e3e"
      />

      <Text className="text-lg">En</Text>

      <TouchableOpacity
        className="w-36 h-10 bg-red-500 rounded justify-center items-center"
        onPress={() => {
          tokenStore.actions.logout();
          navigation.reset({
            index: 0,
            routes: [{ name: RouteNames.Login }],
          });
        }}
      >
        <Text className="text-white font-medium">{t('logout')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: true,
        headerRight: renderHeaderRight,
      }}
      tabBar={handleTabBar}
    >
      {routes.map(({ component, name }) => (
        <Stack.Screen key={name} component={component} name={name} />
      ))}
    </Stack.Navigator>
  );
}
