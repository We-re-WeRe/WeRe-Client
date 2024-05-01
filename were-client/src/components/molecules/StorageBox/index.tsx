import React from 'react';
import clsx from 'clsx';
import ImageButton from '@/components/atoms/ImageButton';
import NormalText from '@/components/atoms/NormalText';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';
import IconText from '../IconText';

interface Props {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

const StorageBox = ({ image, title, author, like, link, userId }: Props) => {
  return (
    <div className={clsx(styles.commonStorageBox)}>
      <div className={clsx(styles.topContents)}>
        {/* Image */}
        <div style={{ marginBottom: 10 }}>
          <ImageButton usage="thumbnail" imgSrc={image} link={link} />
        </div>
        {/* title */}
        <TextButton size="medium" link={link}>
          {title}
        </TextButton>
      </div>
      <div className={clsx(styles.underContents)}>
        {/* author */}
        <TextButton size="medium" link={userId}>
          {author}
        </TextButton>
        {/* like */}
        <NormalText size="md">
          <IconText type="like" text={like} size="sm" />
        </NormalText>
      </div>
    </div>
  );
};

export default StorageBox;
