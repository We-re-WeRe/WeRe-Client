'use client';

import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import React, { useState } from 'react';
import DAYS from '@/constant/day';
import { getToday } from '@/util/date';
import styles from './index.module.scss';

const DayFilter = () => {
  const [current, setCurrent] = useState<string>(getToday().id);

  return (
    <div className={clsx(styles.dayFilter)}>
      {DAYS.map(day => (
        <TextButton
          key={day.id}
          size={current === day.id ? 'large' : 'medium'}
          bold={current === day.id}
          onClick={() => {
            setCurrent(day.id);
          }}
        >
          {day.text}
        </TextButton>
      ))}
    </div>
  );
};

export default DayFilter;
