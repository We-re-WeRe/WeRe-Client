'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import IconButton from '@/components/atoms/IconButton';
import PopupBox, { TItem } from './PopupBox';
import styles from './index.module.scss';

const popupItems: TItem[] = [
  {
    link: 'a',
    text: '보러가기',
  },
  {
    link: '',
    text: '리뷰쓰기',
    clickHandler: () => {
      alert('리뷰');
    },
  },
];

const WebtoonPopup = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const clickHandler = () => {
    if (isShow) {
      setIsShow(false);
      return;
    }
    setIsShow(true);
  };

  return (
    <div className={clsx(styles.webtoonPopup)}>
      <div onClick={clickHandler} role="presentation">
        <IconButton size={32} type="menu" />
      </div>
      <div className={clsx(styles.popupInner)}>
        <PopupBox items={popupItems} isShow={isShow} />
      </div>
    </div>
  );
};

export default WebtoonPopup;
