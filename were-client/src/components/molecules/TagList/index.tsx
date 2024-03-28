import WebtoonTag from '@/components/atoms/WebtoonTag';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

interface ITag {
  tagName: string;
  link?: string;
}

interface Props {
  size: 'small' | 'medium';
  tags: ITag[];
  type: 'storage' | 'webtoon';
}

const TagList = ({ size, tags, type }: Props) => {
  return (
    <div className={clsx(styles.tagList, type === 'storage' ? styles.horizontal : styles.vertical)}>
      {tags.map(tag => (
        <WebtoonTag key={tag.tagName} tagName={tag.tagName} size={size} />
      ))}
    </div>
  );
};

export default TagList;
