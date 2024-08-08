'use client';

import MyPageCategoryTitle from '@/components/molecules/MyPageCategoryTitle';
import React, { useState } from 'react';
import clsx from 'clsx';
import StorageBoxList from '../StorageBoxList';
import styles from './index.module.scss';
import ReviewCardList from '../ReviewCardList';
import WebtoonList from '../WebtoonList';

const MyPageUnderContents = () => {
  const [tabIdx, setTapIdx] = useState<number>(0);

  return (
    <div className={clsx(styles.commonMyPageUnderContents)}>
      <div className={styles.tapContent}>
        <MyPageCategoryTitle setTabIdx={setTapIdx} tabIdx={tabIdx} />
      </div>
      <div className={clsx(styles.selectedContents)}>
        {tabIdx === 0 && <StorageBoxList mypage />}
        {tabIdx === 1 && <ReviewCardList mypage />}
        {tabIdx === 2 && <WebtoonList type="liked" />}
      </div>
    </div>
  );
};

export default MyPageUnderContents;
