'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { getQueryClient } from './get-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '@/components/atoms/AuthProvider';

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
