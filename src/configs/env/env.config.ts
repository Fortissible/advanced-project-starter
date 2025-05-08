import Constants from 'expo-constants';

export const envConfig = {
  dummyJsonBaseUrl: Constants.expoConfig?.extra?.dummyJsonBaseUrl ?? '',
  fakeApiStoreBaseUrl: Constants.expoConfig?.extra?.fakeApiStoreBaseUrl ?? '',
  env: Constants.expoConfig?.extra?.env ?? '',
};
