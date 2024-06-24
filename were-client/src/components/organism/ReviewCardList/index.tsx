import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IUserReview } from '@/types/review';
import ReviewCard from '@/components/molecules/ReviewCard';
import { getReviewsListUserMyPage } from '@/service/review';
import styles from './index.module.scss';

interface Props {
  id?: number;
  setCount?: (count: number) => void;
  mypage?: boolean;
}

const ReviewCardList = ({ id, setCount, mypage }: Props) => {
  const [reviews, setReviews] = useState<IUserReview[]>();

  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await getReviewsListUserMyPage();
      setReviews(reviewsData);
      // userpage 경우
      if (setCount) {
        setCount(reviewsData.length);
      }
    };
    fetchData();
  }, [id, setCount]);

  return (
    <div>
      {reviews ? (
        <div className={clsx(mypage ? styles.mypageReviewList : styles.userReviewList)}>
          {reviews.map(review => (
            <ReviewCard key={review.id} userReview={review} />
          ))}
        </div>
      ) : (
        <div className={clsx(styles.emptyReviews)}>리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default ReviewCardList;
