import React, { InputHTMLAttributes, ReactNode } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import styles from '../index.module.scss';

export interface FormInputProps extends UseControllerProps<any> {
  icon?: any;
  labelText: string;
  inputAttr: WithRequired<InputHTMLAttributes<HTMLInputElement>, 'id'>;
}

const FormInput = ({ icon, labelText, children, inputAttr, ...props }: { children?: ReactNode } & FormInputProps) => {
  const { field } = useController(props);
  return (
    <div className={styles.inputRow}>
      {icon && <div className={styles.inputIcon}>{icon}</div>}
      <label htmlFor={inputAttr.id}>{labelText}</label>
      <input className={styles.joinInput} {...inputAttr} {...field} />
      {children}
    </div>
  );
};

export default FormInput;
