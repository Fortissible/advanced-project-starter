import { memo } from 'react';

export const LoadingIndicator = memo(() => {
  return (
    <div className="flex min-w-screen items-center justify-center bg-white">
      <div className="flex w-screen justify-center items-center px-8">
        <div className="pr-4">Loading...</div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500" />
      </div>
    </div>
  );
});
