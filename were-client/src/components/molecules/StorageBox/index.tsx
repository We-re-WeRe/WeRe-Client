import React from 'react';
import clsx from 'clsx';
import ImageButton from '@/components/atoms/ImageButton';
import NormalText from '@/components/atoms/NormalText';
import LIKE_HEART from '@/../public/assets/like.svg';
import TextButton from '@/components/atoms/TextButton';
import { IStorage } from '@/types/storage';
import { Test } from '@/../public/images/test3.jpg';
import styles from './index.module.scss';

interface Props {
  storage: IStorage & {
    author?: string;
  };
}

const StorageBox = ({ storage }: Props) => {
  return (
    <div className={clsx(styles.commonStorageBox)}>
      <div className={clsx(styles.overTitle)}>
        {/* Image */}
        <div style={{ marginBottom: 10 }}>
          <ImageButton usage="thumbnail" imgSrc={storage.imageURL ? storage.imageURL : Test} link={`${storage.id}`} />
        </div>
        {/* title */}
        <div>
          <TextButton size="medium" link={`${storage.id}`}>
            {storage.name}
          </TextButton>
        </div>
      </div>
      <div className={clsx(styles.underTitle)}>
        {/* author */}
        {storage.author && (
          <TextButton size="medium" link="">
            {storage.author}
          </TextButton>
        )}
        {/* like */}
        <div className={clsx(styles.likeArea)}>
          <LIKE_HEART width={15} height={15} />
          <NormalText size="md" color="white">
            {storage.like.count}
          </NormalText>
        </div>
      </div>
    </div>
  );
};

export default StorageBox;
