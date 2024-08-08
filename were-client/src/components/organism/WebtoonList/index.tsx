import WebtoonBox from '@/components/molecules/WebtoonBox';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';
import { useSearchParams } from 'next/navigation';
import { validateDay } from '@/util/date';
import { useLikedWebtoonList, useWebtoonList } from '@/hooks/useWebtoon';

const WebtoonList = ({ type }: { type?: string }) => {
  const param = useSearchParams();
  const day = validateDay(param.get('tab'));

  const handleType = (type?: string) => {
    if (type === 'liked') {
      return useLikedWebtoonList();
    }
    return useWebtoonList(day, 'n');
  };

  const { data: webtoons } = handleType(type);

  return (
    <div className={clsx(styles.webtoonList)}>
      {webtoons?.map(webtoon => <WebtoonBox webtoon={webtoon} key={webtoon.id} />)}
    </div>
  );
};

export default WebtoonList;
