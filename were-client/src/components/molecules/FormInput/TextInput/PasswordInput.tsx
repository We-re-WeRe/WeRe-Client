import React, { useState } from 'react';
import styles from '../index.module.scss';
import { IconEyeClose, IconEyeOpen } from '../../../../../public/assets';

import FormInput, { FormInputProps } from './FormInput';

const PasswordInput = ({ icon, labelText, inputAttr, ...props }: FormInputProps) => {
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <FormInput
      icon={icon}
      labelText={labelText}
      inputAttr={{ type: hide ? 'password' : 'text', ...inputAttr }}
      {...props}
    >
      <div className={styles.hideButton} role="presentation" onClick={toggleHide}>
        {hide ? <IconEyeClose width={20} height={20} /> : <IconEyeOpen width={20} height={20} />}
      </div>
    </FormInput>
  );
};

export default PasswordInput;
