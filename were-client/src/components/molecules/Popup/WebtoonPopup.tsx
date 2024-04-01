'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import PopupBox, { TItem } from './PopupBox';
import styles from './index.module.scss';
import { IconMenu } from '../../../../public/assets';

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
        <IconMenu width="32px" height="32px" fill="#000000" />
      </div>
      <div className={clsx(styles.popupInner)}>
        <PopupBox items={popupItems} isShow={isShow} />
      </div>
    </div>
  );
};

export default WebtoonPopup;
