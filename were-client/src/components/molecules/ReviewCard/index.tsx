'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import ProfileButton from '@/components/atoms/ProfileButton';
import TextButton from '@/components/atoms/TextButton';
import ImageButton from '@/components/atoms/ImageButton';
import IconButton from '@/components/atoms/IconButton';
import styles from './index.module.scss';
import IconText from '../IconText';
import TagList from '../TagList';

interface ITag {
  tagName: string;
  link?: string;
}

interface Props {
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

const ReviewCard = ({
  thumbnailImage,
  profileImage,
  title,
  nickname,
  userID,
  webtoonID,
  date,
  starRate,
  review,
  reviewTags,
  likes,
}: Props) => {
  const [like, setLike] = useState(false);
  return (
    <div className={clsx(styles.reviewCard)}>
      <div className={clsx(title && styles.reviewHeader)}>
        <div className={clsx(styles.profileArea)}>
          {profileImage && <ProfileButton usage="review" imgSrc={profileImage} />}
          {thumbnailImage && <ImageButton imgSrc={thumbnailImage} usage="filter" />}
          <TextButton link={userID || webtoonID} size="medium">
            {nickname}
            {title}
          </TextButton>
        </div>
        {title && (
          <div className={clsx(styles.shortcut)}>
            <IconButton size={24} type="shortcut" />
          </div>
        )}
      </div>
      <div className={clsx(styles.addtionalInfo)}>
        <IconText type="star" size="md" text={starRate} />

        <span>{date}</span>
      </div>
      <p className={clsx(styles.reviewContents)}>{review}</p>
      <div className={clsx(styles.tagContents)}>
        <TagList size="small" tags={reviewTags} type="review" />
      </div>
      <div className={clsx(styles.likeArea)}>
        <button
          role="checkbox"
          aria-checked={like}
          onClick={() => {
            setLike(!like);
          }}
        >
          ♥ {likes + (like ? 1 : 0)}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
