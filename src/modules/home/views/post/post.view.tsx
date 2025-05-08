import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { Post } from 'libs/modules/post/models/post.model';
import { memo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { DetailType } from 'src/modules/detail/detail.route';
import { twMerge } from 'tailwind-merge';
import usePostsViewModel from './post.view-model';

type PostItemProps = {
  id: string;
  title: string;
};

export default function PostView() {
  const { handleToDetail, data, isError, isFetched, isPending, refetch, t } =
    usePostsViewModel();

  const Item = memo(({ title, id }: PostItemProps) => (
    <Pressable
      style={styles.item}
      onPress={() => handleToDetail(id, title, DetailType.posts)}
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
        {t('posts.title')}
      </Text>
      <FlatList
        data={data?.posts}
        renderItem={({ item }) => (
          <Item title={item.title} id={item.id.toString()} />
        )}
        keyExtractor={(post: Post) => post.id.toString()}
      ></FlatList>
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
