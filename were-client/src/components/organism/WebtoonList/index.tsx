import WebtoonBox from '@/components/molecules/WebtoonBox';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';
import { IWebtoon } from '@/types/webtoon';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getWebtoons } from '@/service/webtoon';
import { useSearchParams } from 'next/navigation';
import { validateDay } from '@/util/date';

const WebtoonList = () => {
  const param = useSearchParams();
  const day = validateDay(param.get('tab'));

  const { data: webtoons } = useSuspenseQuery({
    queryKey: ['webtoons', day],
    queryFn: (): Promise<IWebtoon[]> => getWebtoons(day, 'n'),
  });

  return <div className={clsx(styles.webtoonList)}>{webtoons?.map(webtoon => <WebtoonBox webtoon={webtoon} />)}</div>;
};

export default WebtoonList;
