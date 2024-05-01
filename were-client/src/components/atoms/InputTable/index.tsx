'use client';

import React, { ChangeEvent, RefObject, useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  type?: 'text' | 'password';
  maxLength: number;
  placeholder: string;
  ref: RefObject<HTMLInputElement>;
}

const InputTable = ({ type, maxLength, placeholder, ref }: Props) => {
  const [text, setText] = useState<string>('');
  const [textLen, setTextLen] = useState<number>(0);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setTextLen(e.target.value.length);
    setText(e.target.value);
  };
  return (
    <div className={clsx(styles.commonInput)}>
      <input
        type={type ?? 'text'}
        value={text}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChangeText}
        ref={ref}
        required
      />
      <span />
      <p>
        <span>
          {textLen}/{maxLength}
        </span>
      </p>
    </div>
  );
};

export default InputTable;
