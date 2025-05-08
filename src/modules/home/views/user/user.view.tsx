import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { memo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { DetailType } from 'src/modules/detail/detail.route';
import { twMerge } from 'tailwind-merge';
import useUserViewModel from './user.view-model';

type UserItemProps = {
  title: string;
  userId: string;
};

export default function UserView() {
  const { handleToDetail, useUsers, t } = useUserViewModel();

  const Item = memo(({ title, userId }: UserItemProps) => (
    <Pressable
      style={styles.item}
      onPress={() => handleToDetail(userId.toString(), title, DetailType.users)}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  ));

  const num: number = 0;
  return (
    <View style={styles.container}>
      <Text
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        {t('users.title')}
      </Text>
      <FlatList
        data={useUsers.data?.users}
        renderItem={({ item }) => (
          <Item title={item.firstName} userId={item.id.toString()} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
