export const envConfig = {
  fakeApiStoreBaseUrl:
    process.env.VITE_PROJECT_STARTER_FAKEAPISTORE_BASE_URL ?? '',
  dummyJsonBaseUrl: process.env.VITE_PROJECT_STARTER_DUMMYJSON_BASE_URL,
  env: process.env.VITE_APP_ENV,
};

export default envConfig;
