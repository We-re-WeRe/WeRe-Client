'use client';
import React from 'react';
import TitleText from '@/components/atoms/TitleText';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useSearchParams } from 'next/navigation';
import { WebtoonReviewCard } from '@/components/molecules/ReviewCard';
import { useWebtoonReview } from '@/hooks/useReview';

const WebtoonInfoReviews = () => {
  const titleId = parseInt(useSearchParams().get('titleId')!);
  const { data } = useWebtoonReview(titleId);
  return (
    <div className={clsx(styles.webtoonInfoReviews)}>
      <TitleText size="medium" color="white">
        리뷰
      </TitleText>
      <ul className={clsx(styles.reviewList)}>
        {data.map(review => (
          <li key={review.id}>
            <WebtoonReviewCard review={review} />
          </li>
        ))}
        {/* <li>
          <WebtoonReviewCard
            review={{
              contents:
                '이렇게 재밌는 웹툰이?? 이렇게 재밌는 웹툰이?? 이렇게 재밌는 웹툰이?? 이렇게 재밌는 웹툰이?? 이렇게 재밌는 웹툰이??',
              starPoint: 4,
              tags: [
                { id: 0, contents: '아저씨' },
                { id: 1, contents: '사랑해' },
              ],
              id: 0,
              like: { isLike: true, count: 24 },
              createdAt: new Date('2024-07-26'),
              isMine: true,
              user: {
                id: 0,
                nickname: '졸키댕',
                imageURL: '',
              },
            }}
          />
        </li> */}
      </ul>
    </div>
  );
};

export default WebtoonInfoReviews;
