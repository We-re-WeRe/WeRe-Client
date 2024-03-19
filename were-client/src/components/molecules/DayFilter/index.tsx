'use client';

import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './index.module.scss';

interface Idays {
  id: number;
  text: string;
}

const days: Idays[] = [
  { id: 0, text: '전체' },
  { id: 1, text: '월' },
  { id: 2, text: '화' },
  { id: 3, text: '수' },
  { id: 4, text: '목' },
  { id: 5, text: '금' },
  { id: 6, text: '토' },
  { id: 7, text: '일' },
];

const DayFilter = () => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <div className={clsx(styles.dayFilter)}>
      {days.map(day => (
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
