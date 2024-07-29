'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import TextButton from '@/components/atoms/TextButton';
import ImageButton from '@/components/atoms/ImageButton';
import IconButton from '@/components/atoms/IconButton';
import { IUserReview } from '@/types/review';
import styles from './index.module.scss';
import IconText from '../IconText';
import TagList from '../TagList';

interface Props {
  userReview: IUserReview;
}

const UserReviewCard = ({ userReview }: Props) => {
  const [like, setLike] = useState<boolean>(userReview.like.isLike);
  const reviewDate = new Date(userReview.createdAt);

  return (
    <div className={clsx(styles.reviewCard)}>
      <div className={clsx(userReview && styles.reviewHeader)}>
        <div className={clsx(styles.profileArea)}>
          {userReview.webtoon.imageURL && <ImageButton imgSrc={userReview.webtoon.imageURL} usage="filter" />}
          <TextButton link={`${userReview.webtoon.id}`} size="medium">
            {userReview.webtoon.title}
          </TextButton>
        </div>
        {userReview && (
          <div className={clsx(styles.shortcut)}>
            <IconButton size={24} type="shortcut" />
          </div>
        )}
      </div>
      <div className={clsx(styles.addtionalInfo)}>
        <IconText type="star" size="md" text={userReview.starPoint} />
        {`${reviewDate.getFullYear()}.${reviewDate.getMonth()}.${reviewDate.getDay()} ${reviewDate.getHours()}:${reviewDate.getMinutes()}:${reviewDate.getSeconds()}`}
      </div>
      <p className={clsx(styles.reviewContents)}>{userReview.contents}</p>
      <div className={clsx(styles.tagContents)}>
        <TagList size="small" tags={userReview.tags} type="review" />
      </div>
      <div className={clsx(styles.likeArea)}>
        <button
          role="checkbox"
          aria-checked={like}
          onClick={() => {
            setLike(!like);
          }}
        >
          ♥ {userReview.like.count + (like ? 1 : 0)}
        </button>
      </div>
    </div>
  );
};

export default UserReviewCard;
