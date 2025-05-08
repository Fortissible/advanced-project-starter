import {
  LocaleOptions,
  isValidLocaleOption,
} from 'src/configs/locale/locale.type';
import { proxy, snapshot } from 'valtio';
import { subscribeKey } from 'valtio/utils';
import appStorage from '../storage/storage.app';

type LocaleState = {
  hydrated: boolean;
  localeOptions: LocaleOptions;
};

const initialLocaleState: LocaleState = {
  localeOptions: LocaleOptions.ID,
  hydrated: false,
};

const state = proxy({
  ...initialLocaleState,
});

const actions = {
  hydrate: async () => {
    const { hydrated } = snapshot(state);

    if (hydrated) return;

    state.hydrated = true;

    const localeStr = appStorage.getString('locale-store.locale-options');

    if (localeStr && isValidLocaleOption(localeStr)) {
      actions.storeLocaleOptions(localeStr as LocaleOptions);
    } else {
      actions.storeLocaleOptions(LocaleOptions.ID); // fallback
    }
  },
  persist: async () => {
    const { hydrated, localeOptions } = snapshot(state);

    // start persisting when store is hydrated
    if (!hydrated) {
      return;
    }

    if (localeOptions) {
      appStorage.set('locale-store.locale-options', localeOptions);
    } else {
      appStorage.delete('locale-store.locale-options');
    }
  },
  storeLocaleOptions: (localeOptions: LocaleOptions) => {
    Object.assign(state, { localeOptions });
  },
};

type LocaleStore = {
  actions: typeof actions;
  initialLocaleState: Readonly<typeof initialLocaleState>;
  state: Readonly<LocaleState>;
};

const localeStore: LocaleStore = {
  actions,
  initialLocaleState,
  state,
};

localeStore.actions.hydrate().then(() => {
  subscribeKey(localeStore.state, 'localeOptions', () =>
    localeStore.actions.persist(),
  );
});

export default localeStore;
