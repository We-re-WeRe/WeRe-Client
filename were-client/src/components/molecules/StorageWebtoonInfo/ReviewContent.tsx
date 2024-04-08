import clsx from 'clsx';
import React from 'react';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';
import IconText from '../IconText';

interface Props {
  reviewStar: number;
  reviewContent: string;
  reviewLike: number;
  webtoonLink: string;
}

const ReviewContent = ({ reviewStar, reviewContent, reviewLike, webtoonLink }: Props) => {
  return (
    <div className={clsx(styles.reviewPart)}>
      <div className={clsx(styles.reviewTop)}>
        <IconText type="star" text={reviewStar} size="sm" />
        <TextButton size="small" link={webtoonLink}>
          웹툰 보러가기 →
        </TextButton>
      </div>
      <div className={clsx(styles.reviewMiddle)}>{reviewContent}</div>
      <IconText type="like" text={reviewLike} size="sm" />
    </div>
  );
};

export default ReviewContent;
