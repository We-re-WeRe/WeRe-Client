import clsx from 'clsx';
import React from 'react';
import CategoryTitle from '@/components/molecules/CategoryTitle';
import StorageBoxList from '../StorageBoxList';
import ReviewCardList from '../ReviewCardList';
import styles from './index.module.scss';

interface ITag {
  tagName: string;
  link?: string;
}

interface IReview {
  thumbnailImage?: string;
  profileImage?: string;
  title?: string;
  nickname?: string;
  userID?: string;
  webtoonID?: string;
  date: string;
  starRate: number;
  review: string;
  reviewTags: ITag[];
  likes: number;
}

interface IStorage {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

interface Props {
  reviews: IReview[];
  storages: IStorage[];
}

const UserpageUnderContents = ({ reviews, storages }: Props) => {
  return (
    <div className={clsx(styles.overall)}>
      <div className={clsx(styles.storageSection)}>
        <CategoryTitle category="보관함" count={reviews.length} />
        <StorageBoxList storages={storages} />
      </div>
      <div className={clsx(styles.reviewSection)}>
        <CategoryTitle category="리뷰" count={storages.length} />
        <ReviewCardList reviews={reviews} />
      </div>
    </div>
  );
};

export default UserpageUnderContents;
