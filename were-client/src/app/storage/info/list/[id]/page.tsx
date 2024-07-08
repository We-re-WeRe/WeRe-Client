'use client';

import StorageErrorFallback from '@/app/storage/fallbacks/error';
import StorageLoading from '@/app/storage/fallbacks/loading';
import CombinedBoundary from '@/components/atoms/CombinedBoundary';
import StorageInfoTemplate from '@/components/template/StorageInfoTemplate';
import Error from 'next/error';
import React from 'react';

const StorageInfoPage = ({ params }: { params: { id: number } }) => {
  if (!params.id) {
    return <Error statusCode={404} />;
  }

  return (
    <CombinedBoundary errorFallback={StorageErrorFallback} suspenseFallback={<StorageLoading />}>
      <StorageInfoTemplate id={params.id} />;
    </CombinedBoundary>
  );
};

export default StorageInfoPage;
