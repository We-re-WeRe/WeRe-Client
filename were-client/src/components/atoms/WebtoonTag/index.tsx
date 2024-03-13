import Link from 'next/link';
import React from 'react';
import NormalText from '../NormalText';
import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
  tagName: string;
  onClick?: () => void;
  size: 'small' | 'medium';
  link?: string;
}

const WebtoonTag = ({ tagName, onClick, size, link }: Props) => {
  if (link) {
    return (
      <Link href={link} className={clsx(styles.webtoonTag)}>
        <div onClick={onClick}>
          <NormalText size={size == 'small' ? 'md' : 'xl'}>#{tagName}</NormalText>
        </div>
      </Link>
    );
  }
  return (
    <div className={clsx(styles.webtoonTag)} onClick={onClick}>
      <NormalText size={size == 'small' ? 'md' : 'xl'}>#{tagName}</NormalText>
    </div>
  );
};

export default WebtoonTag;
