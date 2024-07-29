'use client';
import React from 'react';
import TitleText from '@/components/atoms/TitleText';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getWebtoonReview } from '@/service/review';
import { IWebtoonReview } from '@/types/review';
import { WebtoonReviewCard } from '@/components/molecules/ReviewCard';

const WebtoonInfoReviews = () => {
  const titleId = parseInt(useSearchParams().get('titleId')!);
  const { data } = useSuspenseQuery({
    queryKey: ['webtoon', titleId, 'review'],
    queryFn: (): Promise<IWebtoonReview[]> => getWebtoonReview(titleId),
  });
  return (
    <div className={clsx(styles.webtoonInfoReviews)}>
      <TitleText size="medium" color="white">
        리뷰
      </TitleText>
      <ul className={clsx(styles.reviewList)}>
        {data.map(review => (
          <li>
            <WebtoonReviewCard review={review} key={review.id} />
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
