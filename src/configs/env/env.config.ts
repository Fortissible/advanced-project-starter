export const envConfig = {
  fakeApiStoreBaseUrl:
    import.meta.env.VITE_PROJECT_STARTER_FAKEAPISTORE_BASE_URL ?? '',
  dummyJsonBaseUrl: import.meta.env.VITE_PROJECT_STARTER_DUMMYJSON_BASE_URL,
  env: import.meta.env.VITE_APP_ENV,
};

export default envConfig;
