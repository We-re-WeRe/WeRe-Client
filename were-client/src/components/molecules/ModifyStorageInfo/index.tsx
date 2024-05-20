import React, { RefObject, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import WebtoonTag from '@/components/atoms/WebtoonTag';
import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import styles from './index.module.scss';
import LimitedInput from '../LimitedInput';
import AddTag from '../AddTag';
import { IconPrivate, IconPublic } from '../../../../public/assets';

interface ITag {
  tagName: string;
  link?: string;
}

interface Props {
  id: number;
  imageURL: string | StaticImageData;
  privacy: boolean;
  title: string;
  tagList?: ITag[];
  introduce: string;
}

const ModifyStorageInfo = ({ id, imageURL, privacy, title, tagList, introduce }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [privacySetting, setPrivacySetting] = useState<boolean>(privacy);
  const StorageTitleRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const StorageIntroduceRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  const deleteTag = (target: string) => {
    const deletedTag = tags.filter(tag2 => target !== tag2);
    setTags(deletedTag);
  };

  useEffect(() => {
    if (tagList) {
      const initialTags = tagList.map(tag => tag.tagName);
      setTags(initialTags);
    }
  }, [tagList]);

  return (
    <div className={styles.modifyStorageInfoWrapper}>
      <div className={styles.imageUploadSection}>
        <Image src={imageURL} alt="image" width={200} height={200} />
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
          <LimitedInput className="titleSection" initialValue={title} maxLength={20} ref={StorageTitleRef} />
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
            initialValue={introduce}
            maxLength={200}
            ref={StorageIntroduceRef}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonArea}>
          <TextButton type="button" size="medium" design="inverse">
            취소
          </TextButton>
          <TextButton size="medium" design="primary">
            완료
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default ModifyStorageInfo;
