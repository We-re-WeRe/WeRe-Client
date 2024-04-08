'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import NormalText from '@/components/atoms/NormalText';
import styles from './index.module.scss';
import IconText from '../IconText';
import ReviewContent from './ReviewContent';

interface IReview {
  reviewStar: number;
  reviewContent: string;
  reviewLike: number;
}

interface Props {
  webtoonThumbnail: string | StaticImageData;
  webtoonTitle: string;
  webtoonAuthor: string;
  webtoonLike: number;
  reviewInfo: IReview;
}

const StorageWebtoonInfo = ({ webtoonThumbnail, webtoonTitle, webtoonAuthor, webtoonLike, reviewInfo }: Props) => {
  const [check, setCheck] = useState(false);

  /**
   * @returns 리뷰창 표시or숨김
   */
  const onClickInfo = () => {
    setCheck(!check);
  };

  /**
   * @param t : webtoonTitle
   * @returns 제목 도출
   */
  const narrowTitle = (t: string) => {
    if (t.length > 20) {
      const temp = `${t.substr(0, 20)}...`;
      return temp;
    }
    return t;
  };

  return (
    <div className={clsx(styles.storageWebtoonElement)}>
      <div className={clsx(styles.swInfo)} onClick={onClickInfo} role="button" tabIndex={0}>
        <div className={clsx(styles.swThumbnail)}>
          <Image src={webtoonThumbnail} alt="thumbnail" width={50} height={50} />
        </div>
        <div className={clsx(styles.swTitle)}>
          <NormalText>{narrowTitle(webtoonTitle)}</NormalText>
        </div>
        <div className={clsx(styles.swAuthor)}>
          <NormalText>{webtoonAuthor}</NormalText>
        </div>
        <div className={clsx(styles.swLike)}>
          <IconText type="like" text={webtoonLike} size="sm" />
        </div>
      </div>
      <div className={clsx(styles.line)} />
      <div className={clsx(check ? styles.swReviewExpose : styles.swReviewHide)}>
        <ReviewContent
          reviewStar={reviewInfo.reviewStar}
          reviewContent={reviewInfo.reviewContent}
          reviewLike={reviewInfo.reviewLike}
        />
      </div>
    </div>
  );
};

export default StorageWebtoonInfo;
