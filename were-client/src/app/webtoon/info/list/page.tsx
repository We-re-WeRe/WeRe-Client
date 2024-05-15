'use client';

import WebtoonInfoTemplate from '@/components/template/WebtoonInfoTemplate';
import Error from 'next/error';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const WebtoonInfoPage = () => {
  const params = useSearchParams();

  if (!params.get('titleId')) {
    return <Error statusCode={404} />;
  }

  return <WebtoonInfoTemplate />;
};

export default WebtoonInfoPage;
