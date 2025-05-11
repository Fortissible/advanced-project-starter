import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storageApp from '@src/apps/storage/storage.app';
import LocaleOptions, {
  isValidLocaleOption,
} from '@src/configs/locale/locale.type';
import { storeSliceName } from '@src/configs/store/store.name';

type LocaleState = {
  hydrated: boolean;
  localeOptions: LocaleOptions;
};

const localeInitialState: LocaleState = {
  hydrated: false,
  localeOptions: LocaleOptions.ID,
};

const hydrateLocale = createAsyncThunk(
  'locale/hydrate',
  async (_, { dispatch, getState }) => {
    const storage = storageApp();
    const locale = await storage.actions.getLocale();

    const { hydrated } = getState() as LocaleState;

    if (hydrated) return;

    if (locale && isValidLocaleOption(locale)) {
      dispatch(localeStoreSlice.actions.setLocale(locale));
    } else {
      dispatch(localeStoreSlice.actions.setLocale(LocaleOptions.ID));
    }

    return true;
  },
);

const persistLocale = createAsyncThunk(
  'locale/persist',
  async (_, { getState }) => {
    const { locale } = getState() as { locale: LocaleState };
    const storage = storageApp();

    if (!locale.hydrated) return;

    if (locale.localeOptions) {
      await storage.actions.setLocale(locale.localeOptions);
    } else {
      await storage.actions.clearLocale();
    }
  },
);

const localeSlice = createSlice({
  name: storeSliceName.locale,
  initialState: localeInitialState,
  reducers: {
    setLocale: (state, action: PayloadAction<LocaleOptions>) => {
      state.localeOptions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrateLocale.fulfilled, (state) => {
      state.hydrated = true;
    });
  },
});

const localeStoreSlice = {
  reducers: localeSlice.reducer,
  actions: { ...localeSlice.actions, persistLocale, hydrateLocale },
};
export default localeStoreSlice;
