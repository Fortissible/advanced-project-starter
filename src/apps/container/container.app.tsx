import 'reflect-metadata';
import '../di/injection.app';

import ErrorBoundaryApp from '@src/apps/error-boundary/error-boundary.app';
import NavigationApp from '@src/apps/navigation/navigation.app';
import QueryApp from '@src/apps/query/query.app';
import { StrictMode } from 'react';

export default function ContainerApp() {
  return (
    <StrictMode>
      <ErrorBoundaryApp>
        <QueryApp>
          <NavigationApp />
        </QueryApp>
      </ErrorBoundaryApp>
    </StrictMode>
  );
}
