import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface props {
  children: ReactNode;
  size: 'medium' | 'large';
  color?: 'white' | 'black';
}

const TitleText = ({ children, size, color }: props) => {
  return <h2 className={clsx(styles.titleText, styles[size], color ?? 'black')}>{children}</h2>;
};

export default TitleText;
