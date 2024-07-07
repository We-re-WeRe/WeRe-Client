'use client';

import StorageInfoTemplate from '@/components/template/StorageInfoTemplate';
import Error from 'next/error';
import React from 'react';

const StorageInfoPage = ({ params }: { params: { id: number } }) => {
  if (!params.id) {
    return <Error statusCode={404} />;
  }

  return <StorageInfoTemplate id={params.id} />;
};

export default StorageInfoPage;
