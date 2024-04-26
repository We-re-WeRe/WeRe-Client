import clsx from 'clsx';
import React from 'react';
import CategoryTitle from '@/components/molecules/CategoryTitle';
import styles from './index.module.scss';
import ReviewBoxList from '../ReviewBoxList';

interface ReviewInfo {
  star: number;
  comment: string;
  like: number;
  thumbnail: string;
  link: string;
}

interface Props {
  reviews?: ReviewInfo[];
}

const UserpageReviews = ({ reviews }: Props) => {
  return (
    <div className={clsx(styles.reviews)}>
      <CategoryTitle category="리뷰" count={reviews ? reviews.length : 0} />
      <ReviewBoxList reviews={reviews} />
    </div>
  );
};

export default UserpageReviews;
