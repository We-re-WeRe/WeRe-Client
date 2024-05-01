import React, { useState } from 'react';
import clsx from 'clsx';
import ProfileButton from '@/components/atoms/ProfileButton';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';

import IconText from '../IconText';

interface Props {
  profileImage: string;
  nickname: string;
  userID: string;
  date: string;
  starRate: number;
  review: string;
  likes: number;
}

const ReviewCard = ({ profileImage, nickname, userID, date, starRate, review, likes }: Props) => {
  const [like, setLike] = useState(false);
  return (
    <div className={clsx(styles.reviewCard)}>
      <div className={clsx(styles.profileArea)}>
        <ProfileButton usage="review" imgSrc={profileImage} />
        <TextButton link={userID} size="medium">
          {nickname}
        </TextButton>
      </div>
      <div className={clsx(styles.addtionalInfo)}>
        <IconText type="star" size="md" text={starRate} />

        <span>{date}</span>
      </div>
      <p className={clsx(styles.reviewContents)}>{review}</p>
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
