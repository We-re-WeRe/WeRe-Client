'use client';

import MyPageCategoryTitle from '@/components/molecules/MyPageCategoryTitle';
import React, { useState } from 'react';
import clsx from 'clsx';
import StorageBoxList from '../StorageBoxList';
import styles from './index.module.scss';
import ReviewBoxList from '../ReviewBoxList';
import WebtoonList from '../WebtoonList';
import FollowingList from '../FollowingList';

interface IStorage {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

interface IReview {
  star: number;
  comment: string;
  like: number;
  thumbnail: string;
  link: string;
}

interface IWebtoon {
  title: string;
  author: string;
  stars: number;
  reviews: number;
  imageUrl: string;
  link: string;
}

interface IProfile {
  image: string;
  name: string;
  follower: number;
  link: string;
}

interface ITapState {
  category: string;
  selected: boolean;
}

interface Props {
  link: string;
  storages?: IStorage[];
  reviews?: IReview[];
  likeWebtoons?: IWebtoon[];
  followings?: IProfile[];
}

let preIndex = 0;

const MyPageUnderContents = ({ link, storages, reviews, likeWebtoons, followings }: Props) => {
  const [tapStates, setTapStates] = useState<ITapState[]>([
    { category: '보관함', selected: true },
    { category: '리뷰', selected: false },
    { category: '좋아요', selected: false },
    { category: '팔로우', selected: false },
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
      <MyPageCategoryTitle tapStates={tapStates} link={link} onClickTitle={(i: number) => onClickTitle(i)} />
      <div className={clsx(styles.selectedContents)}>
        {preIndex === 0 && <StorageBoxList storages={storages} mypage />}
        {preIndex === 1 && <ReviewBoxList reviews={reviews} mypage />}
        {preIndex === 2 && <WebtoonList webtoons={likeWebtoons} />}
        {preIndex === 3 && <FollowingList profiles={followings} />}
      </div>
    </div>
  );
};

export default MyPageUnderContents;
