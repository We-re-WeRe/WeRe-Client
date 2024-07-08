'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import StorageWebtoonInfo from '@/components/molecules/StorageWebtoonInfo';
import { IStorageWebtoon } from '@/types/webtoon';
import styles from './index.module.scss';
import ModifyStorageWebtoonList from '../ModifyStorageWebtoonList';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getStorageWebtoonList } from '@/service/webtoon';

interface Props {
  id: number;
  edit: boolean;
}

const StorageWebtoonInfoList = ({ id, edit }: Props) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(-1);
  const { data: webtoonInfos } = useSuspenseQuery({
    queryKey: ['storages'],
    queryFn: (): Promise<IStorageWebtoon[]> => getStorageWebtoonList(id),
  });

  const handleCheckboxChange = (index: number) => {
    setSelectIndex(index);
    setIsCheck(true);
  };

  return (
    <div>
      {isCheck ? (
        webtoonInfos && (
          <ModifyStorageWebtoonList
            storageId={id}
            webtoonInfos={webtoonInfos}
            selectIndex={selectIndex}
            setIsCheck={setIsCheck}
          />
        )
      ) : (
        <div className={styles.swiListWrapper}>
          {webtoonInfos ? (
            <div className={clsx(styles.swiList)}>
              {webtoonInfos.map((webtoonInfo, index) => (
                <div key={webtoonInfo.id} className={clsx(styles.swiListElement)}>
                  {edit && (
                    <div className={clsx(styles.hoverCheckbox)}>
                      <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
                    </div>
                  )}
                  <div className={styles.webtoonContainer}>
                    <StorageWebtoonInfo webtoon={webtoonInfo} reviewShow={!edit} />
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
