import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import NormalText from '@/components/atoms/NormalText';
import { IStorageWebtoon } from '@/types/webtoon';
import Test from '@/../public/images/testThumbnail.png';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';
import IconText from '../IconText';
import ReviewContent from './ReviewContent';
import { authorsInWebtoonList } from '@/util/author';

interface Props {
  webtoon: IStorageWebtoon;
  reviewShow: boolean;
}

const StorageWebtoonInfo = ({ webtoon, reviewShow }: Props) => {
  const [check, setCheck] = useState(false);

  /**
   * @returns 리뷰창 표시or숨김
   */
  const onClickInfo = () => {
    setCheck(!check);
  };

  /**
   * @param title : webtoonTitle
   * @returns 제목 도출
   */
  const narrowTitle = (title: string) => {
    if (title.length > 20) {
      const temp = `${title.substr(0, 20)}...`;
      return temp;
    }
    return title;
  };

  return (
    <div className={clsx(styles.storageWebtoonElement)}>
      <div className={clsx(styles.swInfo)} onClick={onClickInfo} role="button" tabIndex={0}>
        <div className={clsx(styles.swThumbnail)}>
          <Image src={webtoon.imageURL ? webtoon.imageURL : Test} alt="thumbnail" width={50} height={50} />
        </div>
        <div className={clsx(styles.swTitle)}>
          <NormalText>{narrowTitle(webtoon.title)}</NormalText>
        </div>
        <div className={clsx(styles.swAuthor)}>
          <NormalText>{authorsInWebtoonList(webtoon.author, webtoon.painter)}</NormalText>
        </div>
        <div className={clsx(styles.swLike)}>
          <IconText type="like" text={webtoon.like.count} size="sm" />
        </div>
      </div>
      {reviewShow && (
        <div className={clsx(check ? styles.swReviewExpose : styles.swReviewHide)}>
          {webtoon.review.contents ? (
            <ReviewContent
              reviewStar={webtoon.review.starPoint}
              reviewContent={webtoon.review.contents}
              reviewLike={webtoon.review.like.count}
              webtoonLink={webtoon.id}
            />
          ) : (
            <div className={styles.emptyReview}>
              <div className={styles.webtoonLink}>
                <TextButton size="small" link={webtoon.id}>
                  웹툰 보러가기 →
                </TextButton>
              </div>
              <NormalText>작성된 리뷰가 없습니다.</NormalText>
            </div>
          )}
        </div>
      )}
      <div className={clsx(styles.line)} />
    </div>
  );
};

export default StorageWebtoonInfo;
