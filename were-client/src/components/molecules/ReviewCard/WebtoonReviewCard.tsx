'use client';
import { IWebtoonReview } from '@/types/review';
import React from 'react';
import styles from './index.module.scss';
import TextButton from '@/components/atoms/TextButton';
import ProfileButton from '@/components/atoms/ProfileButton';
import IconText from '../IconText';
import TagList from '../TagList';
import { useLikeReview } from '@/hooks/useLike';
import { useSearchParams } from 'next/navigation';

interface Props {
  review: IWebtoonReview;
}

const WebtoonReviewCard = ({ review }: Props) => {
  //const [like, setLike] = useState<boolean>(review.like.isLike);
  const reviewDate = new Date(review.createdAt);
  const titleId = parseInt(useSearchParams().get('titleId')!);
  const { mutate, isPending } = useLikeReview(titleId);

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
          aria-checked={review.like.isLike}
          disabled={isPending}
          onClick={() => {
            mutate({ targetType: 'review', targetId: review.id, currentLike: review.like.isLike });
          }}
        >
          ♥ {review.like.count}
        </button>
      </div>
    </div>
  );
};

export default WebtoonReviewCard;
