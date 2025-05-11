import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authStoreSlice from '@src/configs/store/auth.store.slice';
import localeStoreSlice from '@src/configs/store/locale.store.slice';

export const store = configureStore({
  reducer: {
    auth: authStoreSlice.reducers,
    locale: localeStoreSlice.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

/**
 * STORE CONFIG WITH REDUX-PERSIST (NO NEED TO USE STORAGE APP)
 * // store.ts
 * 
  import { configureStore, combineReducers } from '@reduxjs/toolkit';
  import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
  import localforage from 'localforage'

  const rootReducer = combineReducers({
    auth: authReducer,
    locale: localeReducer,
  });

  const persistConfig = {
    key: 'root',
    storage: localforage,
    whitelist: ['auth', 'locale'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export const persistor = persistStore(store);

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
 */
