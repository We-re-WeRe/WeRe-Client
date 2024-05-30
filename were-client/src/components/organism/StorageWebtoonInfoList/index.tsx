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

  /**
   *
   * @param index : 클릭한 webtoon
   *
   * 선택한 웹툰의 checkbox가 표시되고 수정 컴포넌트로 바뀜.
   */
  const handleCheckboxChange = (index: number) => {
    setSelectIndex(index);
    setIsCheck(true);
  };

  /**
   * 완료 버튼
   * 클릭 시 삭제가 완료된 상태로 돌아감.
   */
  const handleCompleteButton = () => {
    setIsCheck(false);
  };

  /**
   * 취소 버튼
   * 클릭 시 삭제가 되지않은 원상태로 돌아감.
   */
  const handleCancelButton = () => {
    setIsCheck(false);
  };

  return (
    <div>
      {isCheck ? (
        <ModifyStorageWebtoonList
          webtoonInfos={webtoonInfos}
          selectIndex={selectIndex}
          handleCompleteButton={handleCompleteButton}
          handleCancelButton={handleCancelButton}
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
                  <div className={styles.webtoonContainer}>
                    <StorageWebtoonInfo
                      webtoonThumbnail={webtoonInfo.webtoonThumbnail}
                      webtoonTitle={webtoonInfo.webtoonTitle}
                      webtoonAuthor={webtoonInfo.webtoonAuthor}
                      webtoonLike={webtoonInfo.webtoonLike}
                      reviewInfo={webtoonInfo.webtoonReviewInfo}
                      reviewShow={!edit}
                    />
                  </div>
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
