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
}

const TextButton = ({ children, onClick, disabled, type, link, size }: Props) => {
  if (link) {
    return (
      <Link href={link} className={clsx(styles.textButton, styles[size ?? 'medium'])}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(styles.textButton, styles[size ?? 'medium'])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
