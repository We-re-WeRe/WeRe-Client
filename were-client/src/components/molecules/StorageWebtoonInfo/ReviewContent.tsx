import clsx from 'clsx';
import React from 'react';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';
import IconText from '../IconText';

interface Props {
  webtoonStar: number;
  webtoonReview: string;
  webtoonLike: number;
}

const ReviewContent = ({ webtoonStar, webtoonReview, webtoonLike }: Props) => {
  return (
    <div className={clsx(styles.reviewPart)}>
      <div className={clsx(styles.reviewTop)}>
        <IconText type="star" text={webtoonStar} size="sm" />
        <TextButton size="small">웹툰 보러가기 →</TextButton>
      </div>
      <div className={clsx(styles.reviewMiddle)}>{webtoonReview}</div>
      <IconText type="like" text={webtoonLike} size="sm" />
    </div>
  );
};

export default ReviewContent;
