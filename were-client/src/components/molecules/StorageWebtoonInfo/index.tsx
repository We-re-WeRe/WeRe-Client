'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import NormalText from '@/components/atoms/NormalText';
import styles from './index.module.scss';
import IconText from '../IconText';
import ReviewContent from './ReviewContent';

interface Props {
  thumbnail: string | StaticImageData;
  title: string;
  author: string;
  like: number;
  webtoonStar: number;
  webtoonReview: string;
  webtoonLike: number;
}

const StorageWebtoonInfo = ({ thumbnail, title, author, like, webtoonStar, webtoonReview, webtoonLike }: Props) => {
  const [check, setCheck] = useState(false);

  /**
   * @returns 리뷰창 표시or숨김
   */
  const onClickInfo = () => {
    setCheck(!check);
  };

  /**
   * @param t : title
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
          <Image src={thumbnail} alt="thumbnail" width={50} height={50} />
        </div>
        <div className={clsx(styles.swTitle)}>
          <NormalText>{narrowTitle(title)}</NormalText>
        </div>
        <div className={clsx(styles.swAuthor)}>
          <NormalText>{author}</NormalText>
        </div>
        <div className={clsx(styles.swLike)}>
          <IconText type="like" text={like} size="sm" />
        </div>
      </div>
      <div className={clsx(styles.line)} />
      <div className={clsx(check ? styles.swReviewExpose : styles.swReviewHide)}>
        <ReviewContent webtoonStar={webtoonStar} webtoonReview={webtoonReview} webtoonLike={webtoonLike} />
      </div>
    </div>
  );
};

export default StorageWebtoonInfo;
