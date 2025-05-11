import 'reflect-metadata';
import '../di/injection.app';

import ErrorBoundaryApp from '@src/apps/error-boundary/error-boundary.app';
import NavigationApp from '@src/apps/navigation/navigation.app';
import QueryApp from '@src/apps/query/query.app';
import StoreApp from '@src/apps/store/store.app';
import { store } from '@src/configs/store/store.config';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

export default function ContainerApp() {
  return (
    <StrictMode>
      <Provider store={store}>
        <StoreApp />
        <ErrorBoundaryApp>
          <QueryApp>
            <NavigationApp />
          </QueryApp>
        </ErrorBoundaryApp>
      </Provider>
    </StrictMode>
  );
}
