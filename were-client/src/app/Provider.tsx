'use client';

import { QueryClient, QueryClientProvider, defaultShouldDehydrateQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
          dehydrate: {
            // per default, only successful Queries are included,
            // this includes pending Queries as well
            shouldDehydrateQuery: query => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
