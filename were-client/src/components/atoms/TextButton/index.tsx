import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  size: 'small' | 'medium' | 'large';
  bold?: boolean;
  design?: 'none' | 'primary' | 'inverse';
}

const TextButton = ({ children, onClick, disabled, type, link, size, bold, design }: Props) => {
  if (link) {
    return (
      <Link
        href={link}
        className={clsx(
          styles.textButton,
          styles[size ?? 'medium'],
          { [styles.bold]: bold ?? false },
          styles[design ?? ''],
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type ?? 'submit'}
      disabled={disabled}
      className={clsx(
        styles.textButton,
        styles[size ?? 'medium'],
        { [styles.bold]: bold ?? false },
        styles[design ?? ''],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
