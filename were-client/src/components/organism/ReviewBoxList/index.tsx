import React from 'react';
import clsx from 'clsx';
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
  mypage?: boolean;
}

const ReviewBoxList = ({ reviews, mypage }: Props) => {
  return (
    <div>
      {reviews ? (
        <div className={clsx(mypage ? styles.mypageReviewList : styles.userReviewList)}>
          {reviews.map(review => (
            <ReviewBox
              key={review.comment}
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

export default ReviewBoxList;
