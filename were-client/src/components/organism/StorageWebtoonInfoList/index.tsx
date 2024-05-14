'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import StorageWebtoonInfo from '@/components/molecules/StorageWebtoonInfo';
import styles from './index.module.scss';
import ModifyStorageWebtoonList from '../ModifyStorageWebtoonList';

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
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(-1);

  const handleCheckboxChange = (index: number) => {
    setSelectIndex(index);
    setIsCheck(true);
  };

  const handleCompleteButton = () => {
    setIsCheck(false);
  };

  return (
    <div>
      {isCheck ? (
        <ModifyStorageWebtoonList
          webtoonInfos={webtoonInfos}
          selectIndex={selectIndex}
          handleCompleteButton={handleCompleteButton}
        />
      ) : (
        <div className={styles.swiListWrapper}>
          {webtoonInfos ? (
            <div className={clsx(styles.swiList)}>
              {webtoonInfos.map((webtoonInfo, index) => (
                <div key={webtoonInfo.webtoonAuthor} className={clsx(styles.swiListElement)}>
                  <div className={clsx(styles.hoverCheckbox)}>
                    <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
                  </div>
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
          ) : (
            <div className={clsx(styles.emptySWIList)}>보관함에 저장된 웹툰이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default StorageWebtoonInfoList;
