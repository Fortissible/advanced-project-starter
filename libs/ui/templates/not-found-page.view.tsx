import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import RouteNames from 'src/configs/routes/route.constant';
import { UseNavigation } from 'src/configs/routes/route.type';

const NotFoundScreen = () => {
  const { navigate } = useNavigation<UseNavigation>();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl font-bold mb-4">404 - Page Not Found</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigate(RouteNames.TabNavigation, {
            screen: RouteNames.Posts,
            params: undefined,
          })
        }
      />
    </View>
  );
};

export default NotFoundScreen;
