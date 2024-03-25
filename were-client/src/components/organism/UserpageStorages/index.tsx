import CategoryTitle from '@/components/molecules/CategoryTitle';
import StorageBox from '@/components/molecules/StorageBox';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

interface StorageInfo {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

interface Props {
  storages?: StorageInfo[];
}

const UserpageStorages = ({ storages }: Props) => {
  return (
    <div className={clsx(styles.storages)}>
      <CategoryTitle category="보관함" count={storages ? storages.length : 0} />
      {storages ? (
        <div className={clsx(styles.storageList)}>
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
    </div>
  );
};

export default UserpageStorages;
