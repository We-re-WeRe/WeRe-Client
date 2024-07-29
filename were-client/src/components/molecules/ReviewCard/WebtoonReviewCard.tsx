'use client';
import { IWebtoonReview } from '@/types/review';
import React, { useState } from 'react';
import styles from './index.module.scss';
import TextButton from '@/components/atoms/TextButton';
import ProfileButton from '@/components/atoms/ProfileButton';
import IconText from '../IconText';
import TagList from '../TagList';

interface Props {
  review: IWebtoonReview;
}

const WebtoonReviewCard = ({ review }: Props) => {
  const [like, setLike] = useState<boolean>(review.like.isLike);
  const reviewDate = new Date(review.createdAt);

  return (
    <div className={styles.reviewCard}>
      <div className={styles.profileArea}>
        <ProfileButton usage="review" imgSrc={review.user.imageURL} />
        <TextButton link={`${review.user.id}`} size="medium">
          {review.user.nickname}
        </TextButton>
      </div>

      <div className={styles.addtionalInfo}>
        <IconText type="star" size="md" text={review.starPoint} />
        {`${reviewDate.getFullYear()}.${reviewDate.getMonth()}.${reviewDate.getDay()} ${reviewDate.getHours()}:${reviewDate.getMinutes()}:${reviewDate.getSeconds()}`}
      </div>
      <p className={styles.reviewContents}>{review.contents}</p>
      <div className={styles.tagContents}>
        <TagList size="small" tags={review.tags} type="review" />
      </div>
      <div className={styles.likeArea}>
        <button
          role="checkbox"
          aria-checked={like}
          onClick={() => {
            setLike(!like);
          }}
        >
          ♥ {review.like.count + (like ? 1 : 0)}
        </button>
      </div>
    </div>
  );
};

export default WebtoonReviewCard;
