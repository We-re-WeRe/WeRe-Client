'use client';

import Modal from '@/components/molecules/Modal';
import React, { RefObject, useRef, useState } from 'react';
import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import LimitedInput from '@/components/molecules/LimitedInput';
import NormalText from '@/components/atoms/NormalText';
import WebtoonTag from '@/components/atoms/WebtoonTag';
import AddTag from '@/components/molecules/AddTag';
import InputTable from '@/components/atoms/InputTable';
import { getStoragesListUser, postStorages } from '@/service/storage';
import { IStorage } from '@/types/storage';
import useNewStorageModal from './useNewStorageModal';
import styles from './index.module.scss';
import { IconPrivate, IconPublic } from '../../../../public/assets';

interface Props {
  setStorages: (storages: IStorage[]) => void;
}

const NewStorageModal = ({ setStorages }: Props) => {
  const { isShow, closeModal } = useNewStorageModal();
  const [tags, setTags] = useState<string[]>([]);
  const [privacy, setPrivacy] = useState<boolean | undefined>(undefined);
  const NewStorageTextareaRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const NewStroageInputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onClickPrivacy = (isPrivacy: boolean) => {
    if (privacy === undefined) {
      setPrivacy(isPrivacy);
    } else {
      setPrivacy(!privacy);
    }
  };

  const handleCreateStorage = async () => {
    if (NewStorageTextareaRef.current && NewStroageInputRef.current) {
      const { value: titleValue } = NewStroageInputRef.current;
      const { value: introduceValue } = NewStorageTextareaRef.current;

      if (privacy) {
        await postStorages(titleValue, introduceValue, privacy, tags);
        setStorages(await getStoragesListUser());
      }
      closeModal();
    }
  };

  const deleteTag = (target: string) => {
    const deletedTag = tags.filter(tag2 => target !== tag2);
    setTags(deletedTag);
  };

  return (
    <Modal isShow={isShow} onClose={closeModal} header="새 보관함" className={clsx(styles.newStorageDialog)}>
      <div className={clsx(styles.writeSection)}>
        <div className={clsx(styles.titleSection)}>
          <NormalText color="white">제목</NormalText>
          <div className={clsx(styles.inputSection)}>
            <InputTable maxLength={20} ref={NewStroageInputRef} placeholder="제목을 입력해주세요." />
          </div>
        </div>
        <div className={clsx(styles.introSection)}>
          <NormalText color="white">소개</NormalText>
          <div className={clsx(styles.inputSection)}>
            <LimitedInput
              placeholder="소개 글을 입력해주세요."
              maxLength={200}
              className={clsx(styles.storageBox)}
              ref={NewStorageTextareaRef}
            />
          </div>
        </div>
        <div className={clsx(styles.addTagSection)}>
          <section className={clsx(styles.tagSection)}>
            <NormalText color="white" bold>
              태그를 추가해주세요.
            </NormalText>
            <AddTag addTag={setTags} tags={tags} />
            <div className={clsx(styles.tagList)}>
              {tags.map(tag => (
                <div key={tag} onClick={() => deleteTag(tag)} role="presentation" className={clsx(styles.tagWrapper)}>
                  <WebtoonTag tagName={tag} size="medium" />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className={clsx(styles.privacySection)}>
          <NormalText color="white">공개 설정</NormalText>
          <div className={clsx(styles.buttonSection)}>
            <div className={clsx(styles.publicButton, privacy === true && styles.clickedButton)}>
              <TextButton size="small" design="privacy" onClick={() => onClickPrivacy(true)}>
                <IconPublic /> Public
              </TextButton>
            </div>
            <div className={clsx(styles.privateButton, privacy === false && styles.clickedButton)}>
              <TextButton size="small" design="privacy" onClick={() => onClickPrivacy(false)}>
                <IconPrivate /> Private
              </TextButton>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.buttonWrapper)}>
        <div className={clsx(styles.buttonArea)}>
          <TextButton
            type="button"
            size="medium"
            design="inverse"
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </TextButton>
          <TextButton size="medium" design="primary" onClick={() => handleCreateStorage()}>
            만들기
          </TextButton>
        </div>
      </div>
    </Modal>
  );
};

export default NewStorageModal;
