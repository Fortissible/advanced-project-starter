import clsx from 'clsx';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import useRegisterViewModel from './register.view-model';

export default function RegisterView() {
  const { goBack, t } = useRegisterViewModel();

  const num: number = 0;
  return (
    <View style={styles.container}>
      <Text
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        This is a Register View
      </Text>
      <Button title={t('register.register-btn')} onPress={goBack} />
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
