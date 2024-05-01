import React from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';
import WebtoonInfoStorageList from '../WebtoonInfoStorageList';
import WebtoonInfoReviews from '../WebtoonInfoReviews';

const WebtoonInfoContent = () => {
  return (
    <div className={clsx(styles.contentsWrapper)}>
      <div className={clsx(styles.contents)}>
        <WebtoonInfoStorageList />
        <WebtoonInfoReviews />
      </div>
    </div>
  );
};

export default WebtoonInfoContent;
