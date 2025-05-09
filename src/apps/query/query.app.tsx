import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import queryAppClient from './query.client.app';

export default function QueryApp({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryAppClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
