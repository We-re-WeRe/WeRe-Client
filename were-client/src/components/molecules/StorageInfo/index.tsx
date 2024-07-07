import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import NormalText from '@/components/atoms/NormalText';
import TitleText from '@/components/atoms/TitleText';
import Image from 'next/image';
import IconButton from '@/components/atoms/IconButton';
import { IStorageDetail } from '@/types/storage';
import Test from '@/../public/images/testThumbnail.png';
import styles from './index.module.scss';
import TagList from '../TagList';
import IconText from '../IconText';
import { IconUnLock, IconLock } from '../../../../public/assets';
import ModifyStorageInfo from '../ModifyStorageInfo';

interface Props {
  info: IStorageDetail;
}

const StorageInfo = ({ info }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const storageDate = new Date(info.createdAt);

  const handleEditCheck = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit ? (
        <ModifyStorageInfo info={info} setIsEdit={setIsEdit} />
      ) : (
        <div className={clsx(styles.storageInfo)}>
          <div className={clsx(styles.imagePart)}>
            <div className={clsx(styles.storageThumbnail)}>
              <Image src={info.imageURL ? info.imageURL : Test} alt="thumbnail" width={200} height={200} />
            </div>
          </div>
          <div className={clsx(styles.textPart)}>
            <div className={clsx(styles.storagePublicSetting)}>
              {info.isPublic ? <IconUnLock /> : <IconLock />}
              <div className={clsx(styles.setting, info.isPublic ? styles.publicSet : styles.privateSet)}>
                <NormalText color={info.isPublic ? 'white' : 'black'} bold>
                  {info.isPublic ? 'public' : 'private'}
                </NormalText>
              </div>
            </div>
            <div className={clsx(styles.storageTitle)}>
              <TitleText size={info.name.trim().length >= 20 ? 'medium' : 'large'} color="white">
                {info.name}
              </TitleText>
              {info.isMine && (
                <div className={styles.editButton}>
                  <IconButton size={25} type="edit" onClick={handleEditCheck} />
                </div>
              )}
            </div>
            <div className={clsx(styles.storageTags)}>
              <TagList size="medium" tags={info.tags} type="storage" />
            </div>
            <div className={clsx(styles.storageIntro)}>
              <NormalText color="white">{info.explain}</NormalText>
            </div>
            <div className={clsx(styles.storageInfoUnder)}>
              <IconText type="like" text={info.like.count} size="sm" />
              <NormalText color="white">{`${storageDate.getFullYear()}.${storageDate.getMonth()}.${storageDate.getDay()} ${storageDate.getHours()}:${storageDate.getMinutes()}`}</NormalText>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorageInfo;
