'use client';

import MyPageCategoryTitle from '@/components/molecules/MyPageCategoryTitle';
import React, { useState } from 'react';
import clsx from 'clsx';
import StorageBoxList from '../StorageBoxList';
import styles from './index.module.scss';
import ReviewCardList from '../ReviewCardList';
import WebtoonList from '../WebtoonList';

interface ITapState {
  category: string;
  selected: boolean;
}
let preIndex = 0;

const MyPageUnderContents = () => {
  const [tapStates, setTapStates] = useState<ITapState[]>([
    { category: '보관함', selected: true },
    { category: '리뷰', selected: false },
    { category: '좋아요', selected: false },
  ]);

  /**
   *
   * @param idx : 클릭한 category의 index
   * @returns 이전 Category는 기존 상태로 돌아가고 클릭한 Category는 클릭 효과 부여
   */
  const onClickTitle = (idx: number): void => {
    tapStates[preIndex].selected = false;
    tapStates[idx].selected = true;
    preIndex = idx;
    setTapStates([...tapStates]);
  };

  return (
    <div className={clsx(styles.commonMyPageUnderContents)}>
      <div className={styles.tapContent}>
        <MyPageCategoryTitle tapStates={tapStates} onClickTitle={(i: number) => onClickTitle(i)} />
      </div>
      <div className={clsx(styles.selectedContents)}>
        {preIndex === 0 && <StorageBoxList mypage />}
        {preIndex === 1 && <ReviewCardList mypage />}
        {preIndex === 2 && <WebtoonList />}
      </div>
    </div>
  );
};

export default MyPageUnderContents;
