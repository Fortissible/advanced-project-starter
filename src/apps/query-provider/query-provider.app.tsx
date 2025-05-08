// #region IMPORTS
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';
import queryConfig from 'src/configs/query/query.config';
// #endregion

// #region CONSTANTS
export const queryClient = new QueryClient(queryConfig);
// #endregion

// #region PROP TYPES
type AppQueryProviderProps = {
  children: ReactNode;
};
// #endregion

// #region COMPONENT
/**
 * Provider for React Query Client
 */
export default function AppQueryProvider({ children }: AppQueryProviderProps) {
  // TODO: Manage QueryClient behaviour here

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
