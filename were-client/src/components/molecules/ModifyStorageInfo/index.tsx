import React, { RefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import WebtoonTag from '@/components/atoms/WebtoonTag';
import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import Test from '@/../public/images/testThumbnail.png';
import { IStorageDetail } from '@/types/storage';
import styles from './index.module.scss';
import LimitedInput from '../LimitedInput';
import AddTag from '../AddTag';
import { IconPrivate, IconPublic } from '../../../../public/assets';

interface Props {
  info: IStorageDetail;
  handleCancelButton: () => void;
  handleCompleteButton: () => void;
}

const ModifyStorageInfo = ({ info, handleCancelButton, handleCompleteButton }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [privacySetting, setPrivacySetting] = useState<boolean>(info.isPublic);
  const StorageTitleRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const StorageIntroduceRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  const deleteTag = (target: string) => {
    const deletedTag = tags.filter(tag2 => target !== tag2);
    setTags(deletedTag);
  };

  useEffect(() => {
    if (info.tags) {
      const initialTags = info.tags.map(tag => tag.contents);
      setTags(initialTags);
    }
  }, [info.tags]);

  return (
    <div className={styles.modifyStorageInfoWrapper}>
      <div className={styles.imageUploadSection}>
        <Image src={info.imageURL ? info.imageURL : Test} alt="image" width={200} height={200} />
      </div>
      <div className={styles.textSection}>
        <div className={styles.privacySection}>
          <div className={clsx(styles.publicButton, privacySetting && styles.clickedButton)}>
            <TextButton size="small" design="privacy" onClick={() => setPrivacySetting(true)}>
              <IconPublic /> Public
            </TextButton>
          </div>
          <div className={clsx(styles.privateButton, !privacySetting && styles.clickedButton)}>
            <TextButton size="small" design="privacy" onClick={() => setPrivacySetting(false)}>
              <IconPrivate /> Private
            </TextButton>
          </div>
        </div>
        <div className={styles.titleSection}>
          <LimitedInput className="titleSection" initialValue={info.name} maxLength={20} ref={StorageTitleRef} />
        </div>
        <div className={styles.tagsSection}>
          <AddTag addTag={setTags} tags={tags} />
          <div className={styles.tagList}>
            {tags.map(tag => (
              <div key={tag} onClick={() => deleteTag(tag)} role="presentation" className={styles.tagWrapper}>
                <WebtoonTag tagName={tag} size="medium" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.introduceSection}>
          <LimitedInput
            className="introduceSection"
            initialValue={info.explain}
            maxLength={200}
            ref={StorageIntroduceRef}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonArea}>
          <TextButton type="button" size="medium" design="inverse" onClick={handleCancelButton}>
            취소
          </TextButton>
          <TextButton size="medium" design="primary" onClick={handleCompleteButton}>
            완료
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default ModifyStorageInfo;
