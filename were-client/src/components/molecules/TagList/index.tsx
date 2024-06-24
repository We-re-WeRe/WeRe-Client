import WebtoonTag from '@/components/atoms/WebtoonTag';
import { ITag } from '@/types/tag';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  size: 'small' | 'medium';
  tags: ITag[];
  type: 'storage' | 'webtoon' | 'review';
}

const TagList = ({ size, tags, type }: Props) => {
  return (
    <div
      className={clsx(
        styles.tagList,
        type === 'webtoon' ? styles.vertical : styles.horizontal,
        type === 'review' ? styles.reviewGap : styles.storageGap,
      )}
    >
      {tags && tags.map(tag => <WebtoonTag key={tag.id} tagName={tag.contents} size={size} />)}
    </div>
  );
};

export default TagList;
