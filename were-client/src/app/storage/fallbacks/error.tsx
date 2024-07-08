'use client';

import { isAxiosError } from 'axios';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const StorageErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (isAxiosError(error)) {
    return (
      <div>
        <span style={{ color: 'white' }}>{error.response?.status}</span>
        <button style={{ padding: '10px', backgroundColor: 'white' }} onClick={() => resetErrorBoundary()}>
          Reset
        </button>
      </div>
    );
  }
};

export default StorageErrorFallback;
