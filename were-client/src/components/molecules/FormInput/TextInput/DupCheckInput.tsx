import React from 'react';
import { useController } from 'react-hook-form';
import Image from 'next/image';
import styles from '../index.module.scss';

import FormInput, { FormInputProps } from './FormInput';

const DupCheckInput = ({ icon, labelText, inputAttr, ...props }: FormInputProps) => {
  const { fieldState } = useController(props);

  return (
    <FormInput icon={icon} labelText={labelText} inputAttr={inputAttr} {...props}>
      <div className={styles.inputCheck}>
        {fieldState.isTouched && !fieldState.invalid && (
          <Image src="/images/duplicate-check.png" alt="dupcheck" width={20} height={20} />
        )}
      </div>
    </FormInput>
  );
};

export default DupCheckInput;
