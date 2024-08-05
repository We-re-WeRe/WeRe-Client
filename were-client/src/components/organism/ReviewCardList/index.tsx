import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IUserReview } from '@/types/review';
import { UserReviewCard as ReviewCard } from '@/components/molecules/ReviewCard';
import { getReviewsListUser } from '@/service/review';
import styles from './index.module.scss';
import useUserState from '@/hooks/useUserState';
import { useUserReview } from '@/hooks/useReview';

interface Props {
  mypage?: boolean;
}

const ReviewCardList = ({ mypage }: Props) => {
  const { user } = useUserState();
  const { data: reviews } = useUserReview(user!.id);

  return (
    <div>
      {reviews ? (
        <div className={clsx(mypage ? styles.mypageReviewList : styles.userReviewList)}>
          {reviews.map(review => (
            <ReviewCard key={review.id} userReview={review} userId={user!.id} />
          ))}
        </div>
      ) : (
        <div className={clsx(styles.emptyReviews)}>리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default ReviewCardList;
