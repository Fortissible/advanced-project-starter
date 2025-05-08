// app.config.ts
import 'dotenv/config'; // ✅ okay here — runs at build time
import { ExpoConfig } from 'expo/config';

export default ({ config }: { config: ExpoConfig }) => ({
  ...config,
  extra: {
    dummyJsonBaseUrl: process.env.RNTS_PROJECT_STARTER_DUMMYJSON_BASE_URL,
    fakeApiStoreBaseUrl: process.env.RNTS_PROJECT_STARTER_FAKEAPISTORE_BASE_URL,
    env: process.env.RNTS_PROJECT_STARTER_ENV,
  },
});
