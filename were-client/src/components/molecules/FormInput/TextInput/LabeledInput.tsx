'use client';

import React, { InputHTMLAttributes } from 'react';
import NormalText from '@/components/atoms/NormalText';

import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import styles from '../index.module.scss';
import { DupCheckInput, PasswordInput, FormInput } from '..';

interface Props<T extends FieldValues, U extends FieldPath<T>> extends UseControllerProps<T, U> {
  labelText: string;
  icon?: any;
  type?: 'dupcheck' | 'password' | 'none';
  inputAttr: WithRequired<InputHTMLAttributes<HTMLInputElement>, 'id'>;
}

const LabeledInput = <T extends FieldValues, U extends FieldPath<T>>({
  labelText,
  icon,
  type,
  inputAttr,
  ...props
}: Props<T, U>) => {
  const { fieldState } = useController(props);

  return (
    <div className={styles.inputWrapper}>
      <NormalText color="white" size="sm">
        {labelText}
      </NormalText>
      {type === 'dupcheck' && <DupCheckInput labelText={labelText} icon={icon} inputAttr={inputAttr} {...props} />}
      {type === 'password' && <PasswordInput labelText={labelText} icon={icon} inputAttr={inputAttr} {...props} />}
      {type === 'none' && <FormInput labelText={labelText} icon={icon} inputAttr={inputAttr} {...props} />}
      <div className={styles.validWrapper}>
        {fieldState.error?.message && <NormalText size="xs">{fieldState.error.message}</NormalText>}
      </div>
    </div>
  );
};

export default LabeledInput;
