import React from 'react';
import EnterpriseButton from '@/components/molecules/EnterpriseButton';
import DayFilter from '@/components/molecules/DayFilter';
import ScrollTagList from '@/components/molecules/ScrollTagList';
import clsx from 'clsx';
import styles from './index.module.scss';

const dummyTags = [
  {
    tagName: '로맨스',
  },
  {
    tagName: '판타지',
  },
  {
    tagName: '여캐가이쁜',
  },
  {
    tagName: '무협',
  },
  {
    tagName: '주인공이잘생긴',
  },
  {
    tagName: '학교일진물',
  },
  {
    tagName: '복수극',
  },
  {
    tagName: '아카데미물',
  },
  {
    tagName: '격투',
  },
  {
    tagName: '공포',
  },
];

const WebtoonCategory = () => {
  return (
    <div className={clsx(styles.categoryBox)}>
      <EnterpriseButton />
      <DayFilter />
      <div className={clsx(styles.divider)} />
      <ScrollTagList size="small" tags={dummyTags} />
    </div>
  );
};

export default WebtoonCategory;
