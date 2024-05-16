import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  id: string;
}

const LoginInput = React.forwardRef<HTMLInputElement, Props>(({ labelText, id, ...attr }, ref) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.loginInput} id={id} ref={ref} {...attr} />
    </div>
  );
});

export default LoginInput;
