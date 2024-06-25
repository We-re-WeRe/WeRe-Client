'use client';

import StorageBox from '@/components/molecules/StorageBox';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { IStorage } from '@/types/storage';
import { getStoragesListUser } from '@/service/storage';
import useNewStorageModal from '../NewStorageModal/useNewStorageModal';
import styles from './index.module.scss';
import { IconTagAdd } from '../../../../public/assets';
import NewStorageModal from '../NewStorageModal';

interface Props {
  id?: number;
  setCount?: (count: number) => void;
  mypage?: boolean;
}

const StorageBoxList = ({ id, setCount, mypage }: Props) => {
  const [storages, setStorages] = useState<IStorage[]>();
  const { openModal } = useNewStorageModal();
  useEffect(() => {
    const fetchData = async () => {
      const storagesData = await getStoragesListUser(id);
      setStorages(storagesData);
      // userpage 경우
      if (setCount) {
        setCount(storagesData.length);
      }
    };
    fetchData();
  }, [id, setCount]);

  return (
    <div>
      <div className={clsx(mypage ? styles.mypageStorageList : styles.storageList)}>
        {mypage && (
          <div onClick={openModal} role="presentation">
            <div className={clsx(styles.makeStorage)}>
              <IconTagAdd />
            </div>
            <div className={clsx(styles.makeStorageText)}>새 보관함</div>
          </div>
        )}
        {storages ? (
          storages.map(storage => <StorageBox key={storage.id} storage={storage} />)
        ) : (
          <div className={clsx(styles.emptyStorages)}>보관함이 없습니다.</div>
        )}
      </div>
      <NewStorageModal setStorages={setStorages} />
    </div>
  );
};

export default StorageBoxList;
