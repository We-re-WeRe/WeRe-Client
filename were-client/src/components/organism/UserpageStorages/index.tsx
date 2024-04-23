import CategoryTitle from '@/components/molecules/CategoryTitle';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';
import StorageBoxList from '../StorageBoxList';

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
}

const UserpageStorages = ({ storages }: Props) => {
  return (
    <div className={clsx(styles.storages)}>
      <CategoryTitle category="보관함" count={storages ? storages.length : 0} />
      <StorageBoxList storages={storages} />
    </div>
  );
};

export default UserpageStorages;
