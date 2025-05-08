import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { Trans } from 'react-i18next';
import { Button, StyleSheet, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import useDetailViewModel from './detail.view-model';

export default function DetailView() {
  const { detailId, detailTitle, detailType, handleGoBack, t } =
    useDetailViewModel();

  const num: number = 0;
  return (
    <View style={styles.container}>
      <Text
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        <Trans
          components={{
            bold: <Text className="font-bold" />,
          }}
          i18nKey="detail.title"
          values={{
            detailId,
            detailType,
          }}
        />
      </Text>
      <Text
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        {detailTitle}
      </Text>
      <Button title={t('detail.back-btn')} onPress={handleGoBack} />
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
});
