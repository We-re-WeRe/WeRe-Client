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
}

const TextButton = ({ children, onClick, disabled, type, link, size, bold }: Props) => {
  if (link) {
    return (
      <Link href={link} className={clsx(styles.textButton, styles[size ?? 'medium'], { [styles.bold]: bold ?? false })}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(styles.textButton, styles[size ?? 'medium'], { [styles.bold]: bold ?? false })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
