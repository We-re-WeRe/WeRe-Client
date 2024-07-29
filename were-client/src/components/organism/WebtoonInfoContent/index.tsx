import React, { Suspense } from 'react';

import clsx from 'clsx';
import styles from './index.module.scss';
import WebtoonInfoStorageList from '../WebtoonInfoStorageList';
import WebtoonInfoReviews from '../WebtoonInfoReviews';
import { default as StorageLoading } from '../WebtoonInfoStorageList/Skeleton';
import { default as ReviewLoading } from '../WebtoonInfoReviews/Skeleton';

const WebtoonInfoContent = () => {
  return (
    <div className={clsx(styles.contentsWrapper)}>
      <div className={clsx(styles.contents)}>
        <Suspense fallback={<StorageLoading />}>
          <WebtoonInfoStorageList />
        </Suspense>
        <Suspense fallback={<ReviewLoading />}>
          <WebtoonInfoReviews />
        </Suspense>
      </div>
    </div>
  );
};

export default WebtoonInfoContent;
