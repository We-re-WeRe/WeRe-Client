'use client';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

interface Props {
  errorFallback: React.ComponentType<FallbackProps>;
  suspenseFallback: React.ReactNode;
  children: React.ReactNode;
}

const CombinedBoundary = ({ children, errorFallback, suspenseFallback }: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={errorFallback}>
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default CombinedBoundary;
