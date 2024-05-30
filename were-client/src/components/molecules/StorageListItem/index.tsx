import NormalText from '@/components/atoms/NormalText';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  imgURL: string;
  title: string;
  webtoonNumber: number;
}

const StorageListItem = ({ imgURL, title, webtoonNumber }: Props) => {
  return (
    <div className={styles.storageListItem}>
      <button className={styles.itemButton}>
        <Image src={imgURL} alt={title} width={50} height={50} />
        <div className={styles.itemDescription}>
          <NormalText color="white">{title}</NormalText>
          <NormalText size="sm">{`보관중인 웹툰 ${webtoonNumber}개`}</NormalText>
        </div>
      </button>
    </div>
  );
};

export default StorageListItem;
