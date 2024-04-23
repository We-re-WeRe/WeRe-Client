'use client';

import React, { KeyboardEvent, RefObject, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import AutoInput from '@/components/atoms/AutoInput';
import styles from './index.module.scss';
import { IconTagAdd } from '../../../../public/assets';

interface Props {
  addTag: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
}

const validateNewTag = (newTag: string, tags: string[]): string => {
  if (tags.length >= 5) {
    return '태그는 최대 5개까지 생성 가능합니다.';
  }
  if (newTag.length < 1) {
    return '태그명을 입력해주세요.';
  }
  if (tags.includes(newTag)) {
    return '중복된 태그입니다.';
  }

  return '';
};

const AddTag = ({ tags, addTag }: Props) => {
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleAddButtonClick = () => {
    if (inputRef.current) {
      const errMsg = validateNewTag(inputRef.current.value, tags);
      setError(errMsg);

      if (errMsg.length < 1) {
        addTag([...tags, inputRef.current.value]);
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className={clsx(styles.addTag)}>
      <div className={clsx(styles.inputWrapper)}>
        <span className={clsx(styles.prefix)}>#</span>
        <AutoInput
          ref={inputRef}
          className={clsx(styles.tagInput)}
          maxLength={12}
          placeholder="태그를 입력하세요."
          type="text"
          spellCheck="false"
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              handleAddButtonClick();
            }
          }}
        />
        <button className={clsx(styles.addButton)} onClick={handleAddButtonClick} tabIndex={-1}>
          <IconTagAdd />
        </button>
      </div>
      <span className={clsx(styles.error)}>{error}</span>
    </div>
  );
};

export default AddTag;
