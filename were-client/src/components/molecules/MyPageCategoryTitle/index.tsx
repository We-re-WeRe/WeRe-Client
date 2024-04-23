'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';

interface Props {
  link: string;
}

const titles = ['보관함', '리뷰', '좋아요', '팔로워'];
let previousState = 0;

const MyPageCategoryTitle = ({ link }: Props) => {
  const [states, setStates] = useState([true, false, false, false]);

  /**
   *
   * @param idx : 클릭한 Category의 index
   * @return 이전 Category는 기존 상태로 돌아가고 클릭한 Category는 클릭 효과 부여
   */
  const onClickTitle = (idx: number) => {
    states[previousState] = false;
    states[idx] = true;
    previousState = idx;
    setStates([...states]);
  };

  return (
    <div className={clsx(styles.commonCategoryTitle)}>
      <div className={clsx(styles.title)}>
        {titles.map(title => (
          <TextButton
            key={title}
            size={states[titles.indexOf(title)] ? 'large' : 'small'}
            bold={states[titles.indexOf(title)]}
            link={link}
            onClick={() => onClickTitle(titles.indexOf(title))}
          >
            {title}
          </TextButton>
        ))}
      </div>
    </div>
  );
};

export default MyPageCategoryTitle;
