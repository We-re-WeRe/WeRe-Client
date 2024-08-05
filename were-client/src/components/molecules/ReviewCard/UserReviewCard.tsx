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
import { useLikeReview } from '@/hooks/useLike';

interface Props {
  userReview: IUserReview;
  userId: number;
}

const UserReviewCard = ({ userReview, userId }: Props) => {
  const reviewDate = new Date(userReview.createdAt);
  const { mutate, isPending } = useLikeReview(userId, 'user');

  return (
    <div className={clsx(styles.reviewCard)}>
      <div className={styles.reviewHeader}>
        <div className={clsx(styles.profileArea)}>
          <ImageButton
            imgSrc={`${process.env.NEXT_PUBLIC_IMG_PROXY_URL}${userReview.webtoon.imageURL}`}
            usage="filter"
          />
          <TextButton link={`/webtoon/info/list?titleId=${userReview.webtoon.id}`} size="medium">
            {userReview.webtoon.title}
          </TextButton>
        </div>

        {/* <div className={clsx(styles.shortcut)}>
          <IconButton size={24} type="shortcut" />
        </div> */}
      </div>
      <div className={clsx(styles.addtionalInfo)}>
        <IconText type="star" size="md" text={userReview.starPoint} />
        {`${reviewDate.getFullYear()}.${reviewDate.getMonth()}.${reviewDate.getDay()} ${reviewDate.getHours()}:${reviewDate.getMinutes()}:${reviewDate.getSeconds()}`}
      </div>
      <p className={clsx(styles.reviewContents)}>{userReview.contents}</p>
      <div className={clsx(styles.tagContents)}>
        <TagList size="small" tags={userReview.tags} type="review" />
      </div>
      <div className={styles.likeArea}>
        <button
          role="checkbox"
          aria-checked={userReview.like.isLike}
          disabled={isPending}
          onClick={() => {
            mutate({ targetType: 'review', targetId: userReview.id, currentLike: userReview.like.isLike });
          }}
        >
          ♥ {userReview.like.count}
        </button>
      </div>
    </div>
  );
};

export default UserReviewCard;
