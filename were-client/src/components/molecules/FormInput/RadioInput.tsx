import React, { InputHTMLAttributes } from 'react';
import { FieldPath, FieldPathValue, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import NormalText from '@/components/atoms/NormalText';
import styles from './index.module.scss';

interface RadioInputProps<T extends FieldValues, U extends FieldPath<T>> extends UseControllerProps<T, U> {
  inputAttr?: InputHTMLAttributes<HTMLInputElement>;
  radioItem: { [key in FieldPathValue<T, U>]: string };
  labelText: string;
}

const RadioInput = <T extends FieldValues, U extends FieldPath<T>>({
  labelText,
  inputAttr,
  radioItem,
  ...props
}: RadioInputProps<T, U>) => {
  const { field } = useController(props);
  const radioItemKey = Object.keys(radioItem) as FieldPathValue<T, U>[];

  return (
    <div className={styles.inputWrapper}>
      <NormalText color="white" size="sm">
        {labelText}
      </NormalText>
      <ul className={styles.genderInputWrapper}>
        {radioItemKey.map((itemKey, idx) => (
          <li className={styles.radioItem} key={itemKey}>
            <input
              type="radio"
              id={`identityGender${idx + 1}`}
              {...inputAttr}
              {...field}
              value={itemKey}
              defaultChecked={field.value === itemKey}
            />
            <label htmlFor={`identityGender${idx + 1}`}>{radioItem[itemKey]}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioInput;
