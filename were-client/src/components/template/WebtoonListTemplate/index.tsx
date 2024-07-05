'use client';

import React from 'react';

import WebtoonCategory from '@/components/organism/WebtoonCategory';
import WebtoonList from '@/components/organism/WebtoonList';

import clsx from 'clsx';
import styles from './index.module.scss';
import CombinedBoundary from '@/components/atoms/CombinedBoundary';
import ErrorFallback from '@/app/webtoon/fallbacks/error';
import Loading from '@/app/webtoon/fallbacks/loading';

const WebtoonListTemplate = () => {
  return (
    <div className={clsx(styles.webtoonListTemplate)}>
      <div className={clsx(styles.templateWrapper)}>
        <WebtoonCategory />
        <CombinedBoundary errorFallback={ErrorFallback} suspenseFallback={<Loading />}>
          <WebtoonList />
        </CombinedBoundary>
      </div>
    </div>
  );
};

export default WebtoonListTemplate;
