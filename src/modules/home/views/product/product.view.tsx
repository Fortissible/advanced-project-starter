import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { Product } from 'libs/modules/product/models/product.model';
import { memo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { DetailType } from 'src/modules/detail/detail.route';
import { twMerge } from 'tailwind-merge';
import useProductViewModel from './product.view-model';

type ProductItemProps = {
  title: string;
  id: number;
};

export default function ProductView() {
  const { handleToDetail, useProducts, t } = useProductViewModel();

  const Item = memo(({ title, id }: ProductItemProps) => (
    <Pressable
      style={styles.item}
      onPress={() => handleToDetail(id.toString(), title, DetailType.products)}
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
        {t('products.title')}
      </Text>
      <FlatList
        data={useProducts.data}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(product: Product) => product.id.toString()}
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
