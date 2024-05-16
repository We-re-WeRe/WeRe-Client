import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  id: string;
}

const LoginInput = ({ labelText, id, ...attr }: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.loginInput} id={id} {...attr} />
    </div>
  );
};

export default LoginInput;
