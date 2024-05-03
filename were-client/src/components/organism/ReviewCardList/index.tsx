import React from 'react';
import clsx from 'clsx';
import ReviewCard from '@/components/molecules/ReviewCard';
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

interface Props {
  reviews?: IReview[];
  mypage?: boolean;
}

const ReviewCardList = ({ reviews, mypage }: Props) => {
  return (
    <div>
      {reviews ? (
        <div className={clsx(mypage ? styles.mypageReviewList : styles.userReviewList)}>
          {reviews.map(review => (
            <ReviewCard
              key={review.userID || review.webtoonID}
              thumbnailImage={review.thumbnailImage}
              title={review.title}
              webtoonID={review.webtoonID}
              date={review.date}
              starRate={review.starRate}
              review={review.review}
              reviewTags={review.reviewTags}
              likes={review.likes}
            />
          ))}
        </div>
      ) : (
        <div className={clsx(styles.emptyReviews)}>리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default ReviewCardList;
