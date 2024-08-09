'use client';

import StorageBox from '@/components/molecules/StorageBox';
import React from 'react';
import useNewStorageModal from '../NewStorageModal/useNewStorageModal';
import styles from './index.module.scss';
import { IconTagAdd } from '../../../../public/assets';
import NewStorageModal from '../NewStorageModal';
import { useUserStorageList } from '@/hooks/useStorage';
import useUserState from '@/hooks/useUserState';

interface Props {
  setCount?: (count: number) => void;
  mypage?: boolean;
}

const StorageBoxList = ({ setCount, mypage }: Props) => {
  const { openModal } = useNewStorageModal();
  const { user } = useUserState();
  const { data: storages } = useUserStorageList(user!.id);

  return (
    <div>
      <div className={mypage ? styles.mypageStorageList : styles.storageList}>
        {mypage && (
          <div onClick={openModal} role="presentation">
            <div className={styles.makeStorage}>
              <IconTagAdd />
            </div>
            <div className={styles.makeStorageText}>새 보관함</div>
          </div>
        )}
        {storages ? (
          storages.map(storage => <StorageBox key={storage.id} storage={storage} />)
        ) : (
          <div className={styles.emptyStorages}>보관함이 없습니다.</div>
        )}
      </div>
      <NewStorageModal />
    </div>
  );
};

export default StorageBoxList;
