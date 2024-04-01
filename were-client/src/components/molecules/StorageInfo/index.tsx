import React from 'react';
import clsx from 'clsx';
import NormalText from '@/components/atoms/NormalText';
import TitleText from '@/components/atoms/TitleText';
import Image from 'next/image';
import styles from './index.module.scss';
import TagList from '../TagList';
import IconText from '../IconText';
import { IconUnLock, IconLock } from '../../../../public/assets';

interface TagInfo {
  tagName: string;
  link?: string;
}

interface Props {
  thumbnail: string;
  open: boolean;
  title: string;
  tagList: TagInfo[];
  introducing: string;
  like: number;
  date: string;
}

const StorageInfo = ({ thumbnail, open, title, tagList, introducing, like, date }: Props) => {
  return (
    <div className={clsx(styles.storageInfo)}>
      <div className={clsx(styles.imagePart)}>
        <div className={clsx(styles.storageThumbnail)}>
          <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        </div>
      </div>
      <div className={clsx(styles.textPart)}>
        <div className={clsx(styles.storagePublicSetting)}>
          {open ? <IconUnLock /> : <IconLock />}
          <div className={clsx(styles.setting, open ? styles.publicSet : styles.privateSet)}>
            <NormalText color={open ? 'white' : 'black'} bold>
              {open ? 'public' : 'private'}
            </NormalText>
          </div>
        </div>
        <div className={clsx(styles.storageTitle)}>
          <TitleText size="large" color="white">
            {title}
          </TitleText>
        </div>
        <div className={clsx(styles.storageTags)}>
          <TagList size="small" tags={tagList} type="storage" />
        </div>
        <div className={clsx(styles.storageIntro)}>
          <NormalText color="white">{introducing}</NormalText>
        </div>
        <div className={clsx(styles.storageInfoUnder)}>
          <IconText type="like" text={like} size="sm" />
          <NormalText color="white">{date}</NormalText>
        </div>
      </div>
    </div>
  );
};

export default StorageInfo;
