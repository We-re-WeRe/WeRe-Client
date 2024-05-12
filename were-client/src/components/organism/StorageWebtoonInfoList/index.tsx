import React from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import StorageWebtoonInfo from '@/components/molecules/StorageWebtoonInfo';
import styles from './index.module.scss';

interface IWebtoonReview {
  reviewStar: number;
  reviewContent: string;
  reviewLike: number;
  webtoonLink: string;
}

interface IWebtoon {
  webtoonThumbnail: string | StaticImageData;
  webtoonTitle: string;
  webtoonAuthor: string;
  webtoonLike: number;
  webtoonReviewInfo?: IWebtoonReview;
}

interface Props {
  webtoonInfos?: IWebtoon[];
  edit: boolean;
}

const StorageWebtoonInfoList = ({ webtoonInfos, edit }: Props) => {
  return (
    <div className={clsx(styles.swiList)}>
      {webtoonInfos ? (
        <div>
          <div className={clsx(styles.swiListElement)}>
            {webtoonInfos.map(webtoonInfo => (
              <div className={clsx(styles.edittingDesign)} key={webtoonInfo.webtoonAuthor}>
                <StorageWebtoonInfo
                  webtoonThumbnail={webtoonInfo.webtoonThumbnail}
                  webtoonTitle={webtoonInfo.webtoonTitle}
                  webtoonAuthor={webtoonInfo.webtoonAuthor}
                  webtoonLike={webtoonInfo.webtoonLike}
                  reviewInfo={webtoonInfo.webtoonReviewInfo}
                  reviewShow={!edit}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={clsx(styles.emptySWIList)}>보관함에 저장된 웹툰이 없습니다.</div>
      )}
    </div>
  );
};

export default StorageWebtoonInfoList;
