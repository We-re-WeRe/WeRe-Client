'use client';

import StorageBox from '@/components/molecules/StorageBox';
import clsx from 'clsx';
import React from 'react';
import useNewStorageModal from '../NewStorageModal/useNewStorageModal';
import styles from './index.module.scss';
import { IconTagAdd } from '../../../../public/assets';
import NewStorageModal from '../NewStorageModal';

interface IStorage {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

interface Props {
  storages?: IStorage[];
  mypage?: boolean;
}

const StorageBoxList = ({ storages, mypage }: Props) => {
  const { openModal } = useNewStorageModal();

  return (
    <div>
      {storages ? (
        <div className={clsx(mypage ? styles.mypageStorageList : styles.storageList)}>
          {mypage && (
            <div onClick={openModal} role="presentation">
              <div className={clsx(styles.makeStorage)}>
                <IconTagAdd />
              </div>
              <div className={clsx(styles.makeStorageText)}>새 보관함</div>
            </div>
          )}
          {storages.map(storage => (
            <StorageBox
              key={storage.link}
              image={storage.image}
              title={storage.title}
              author={storage.author}
              like={storage.like}
              link={storage.link}
              userId={storage.userId}
            />
          ))}
        </div>
      ) : (
        <div className={clsx(styles.emptyStorages)}>보관함이 없습니다.</div>
      )}
      <NewStorageModal />
    </div>
  );
};

export default StorageBoxList;
