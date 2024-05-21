import React, { useState } from 'react';
import clsx from 'clsx';
import NormalText from '@/components/atoms/NormalText';
import TitleText from '@/components/atoms/TitleText';
import Image, { StaticImageData } from 'next/image';
import IconButton from '@/components/atoms/IconButton';
import styles from './index.module.scss';
import TagList from '../TagList';
import IconText from '../IconText';
import { IconUnLock, IconLock } from '../../../../public/assets';
import ModifyStorageInfo from '../ModifyStorageInfo';

interface TagInfo {
  tagName: string;
  link?: string;
}

interface Props {
  thumbnail: string | StaticImageData;
  open: boolean;
  title: string;
  tagList: TagInfo[];
  introducing: string;
  like: number;
  date: string;
}

const StorageInfo = ({ thumbnail, open, title, tagList, introducing, like, date }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditCheck = () => {
    setIsEdit(true);
  };

  const handleCancelButton = () => {
    setIsEdit(false);
  };

  const handleCompleteButton = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <ModifyStorageInfo
          id={0}
          imageURL={thumbnail}
          privacy={open}
          title={title}
          tagList={tagList}
          introduce={introducing}
          handleCancelButton={handleCancelButton}
          handleCompleteButton={handleCompleteButton}
        />
      ) : (
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
              <TitleText size={title.trim().length >= 20 ? 'medium' : 'large'} color="white">
                {title}
              </TitleText>
              <div className={styles.editButton}>
                <IconButton size={25} type="edit" onClick={handleEditCheck} />
              </div>
            </div>
            <div className={clsx(styles.storageTags)}>
              <TagList size="medium" tags={tagList} type="storage" />
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
      )}
    </div>
  );
};

export default StorageInfo;
