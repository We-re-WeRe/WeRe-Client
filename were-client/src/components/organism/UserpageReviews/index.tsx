import clsx from 'clsx';
import React from 'react';
import CategoryTitle from '@/components/molecules/CategoryTitle';
import ReviewBox from '@/components/molecules/ReviewBox';
import styles from './index.module.scss';

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
      {reviews ? (
        <div className={clsx(styles.reviewList)}>
          {reviews.map(review => (
            <ReviewBox
              key={review.link}
              star={review.star}
              comment={review.comment}
              like={review.like}
              thumbnail={review.thumbnail}
              link={review.link}
            />
          ))}
        </div>
      ) : (
        <div className={clsx(styles.emptyReviews)}>리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default UserpageReviews;
