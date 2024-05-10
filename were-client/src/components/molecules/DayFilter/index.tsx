'use client';

import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import React from 'react';
import DAYS from '@/constant/day';
import { getToday } from '@/util/date';
import { useSearchParams } from 'next/navigation';
import styles from './index.module.scss';

const DayFilter = () => {
  const param = useSearchParams();
  const today = param.get('tab') ? param.get('tab') : getToday().id;

  return (
    <div className={clsx(styles.dayFilter)}>
      {DAYS.map(day => (
        <TextButton
          key={day.id}
          size={today === day.id ? 'large' : 'medium'}
          bold={today === day.id}
          link={`/webtoon/?tab=${day.id}`}
        >
          {day.text}
        </TextButton>
      ))}
    </div>
  );
};

export default DayFilter;
