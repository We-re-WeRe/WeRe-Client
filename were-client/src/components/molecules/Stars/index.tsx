'use client';

import IconButton from '@/components/atoms/IconButton';
import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  point: number;
  setPoint: Dispatch<SetStateAction<number>>;
}
const starPoint = [1, 2, 3, 4, 5];

const Stars = ({ point, setPoint }: Props) => {
  return (
    <div className={clsx(styles.starBox)}>
      {starPoint.map(v =>
        v <= point ? (
          <IconButton type="star" size={24} key={v} onClick={() => setPoint(v)} />
        ) : (
          <IconButton type="blank-star" size={24} key={v} onClick={() => setPoint(v)} />
        ),
      )}
    </div>
  );
};

export default Stars;
