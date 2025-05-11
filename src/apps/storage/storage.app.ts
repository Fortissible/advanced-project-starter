import LocaleOptions from '@src/configs/locale/locale.type';
import {
  storageActionKeys,
  storageInstanceName,
} from '@src/configs/storage/storage.config';
import { createInstance } from 'localforage';

export default function storageApp() {
  const storage = createInstance({
    name: storageInstanceName,
  });

  const actions = {
    setLocale: async (locale: LocaleOptions): Promise<void> => {
      await storage.setItem(storageActionKeys.locale, locale);
    },

    setAuthKeys: async (keys: {
      accessToken: string;
      refreshToken: string;
    }): Promise<void> => {
      await storage.setItem(storageActionKeys.authAccessKey, keys.accessToken);
      await storage.setItem(
        storageActionKeys.authRefreshKey,
        keys.refreshToken,
      );
    },

    getLocale: async (): Promise<LocaleOptions | null> => {
      const locale = await storage.getItem<LocaleOptions>(
        storageActionKeys.locale,
      );
      return locale ?? null;
    },

    getAuthKeys: async (): Promise<{
      accessToken: string | null;
      refreshToken: string | null;
    }> => {
      const accessToken = await storage.getItem<string>(
        storageActionKeys.authAccessKey,
      );
      const refreshToken = await storage.getItem<string>(
        storageActionKeys.authRefreshKey,
      );
      return {
        accessToken: accessToken ?? null,
        refreshToken: refreshToken ?? null,
      };
    },

    clearAuthKeys: async (): Promise<void> => {
      await storage.removeItem(storageActionKeys.authAccessKey);
      await storage.removeItem(storageActionKeys.authRefreshKey);
    },

    clearLocale: async (): Promise<void> => {
      await storage.removeItem(storageActionKeys.locale);
    },
  };

  return {
    actions,
  };
}
