import '../../../global.css';
import '../di/injection.app';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from '../error-boundary/error-boundary.app';
import { AppNavigator } from '../navigator/navigator.app';
import AppQueryProvider from '../query-provider/query-provider.app';

export default function AppContainer() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <AppQueryProvider>
          <AppNavigator />
        </AppQueryProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
