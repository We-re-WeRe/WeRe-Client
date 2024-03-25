import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import NormalText from '../NormalText';
import styles from './index.module.scss';

interface Props {
  tagName: string;
  onClick?: () => void;
  size: 'small' | 'medium';
  link?: string;
  tagRef?: React.LegacyRef<HTMLDivElement> | undefined;
  selected?: boolean;
}

const WebtoonTag = ({ tagName, onClick, size, link, tagRef, selected }: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <div
          className={clsx(styles.webtoonTag, { [styles.selected]: selected ?? false })}
          onClick={onClick}
          role="presentation"
          ref={tagRef}
        >
          <NormalText size={size === 'small' ? 'md' : 'xl'} color={selected ? 'white' : 'black'}>
            #{tagName}
          </NormalText>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={clsx(styles.webtoonTag, { [styles.selected]: selected ?? false })}
      onClick={onClick}
      role="presentation"
      ref={tagRef}
    >
      <NormalText size={size === 'small' ? 'md' : 'xl'} color={selected ? 'white' : 'black'}>
        #{tagName}
      </NormalText>
    </div>
  );
};

export default WebtoonTag;
