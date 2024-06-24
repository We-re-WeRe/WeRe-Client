'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import CategoryTitle from '@/components/molecules/CategoryTitle';
import StorageBoxList from '../StorageBoxList';
import ReviewCardList from '../ReviewCardList';
import styles from './index.module.scss';

interface Props {
  id: number;
}

const UserpageUnderContents = ({ id }: Props) => {
  const [sCount, setSCount] = useState<number>(0);
  const [rCount, setRCount] = useState<number>(0);

  const handleSetStoragesCount = (count: number) => {
    setSCount(count);
  };

  const handleSetReviewsCount = (count: number) => {
    setRCount(count);
  };

  return (
    <div className={clsx(styles.overall)}>
      <div className={clsx(styles.storageSection)}>
        <CategoryTitle category="보관함" count={sCount} />
        <StorageBoxList id={id} setCount={handleSetStoragesCount} />
      </div>
      <div className={clsx(styles.reviewSection)}>
        <CategoryTitle category="리뷰" count={rCount} />
        <ReviewCardList id={id} setCount={handleSetReviewsCount} />
      </div>
    </div>
  );
};

export default UserpageUnderContents;
