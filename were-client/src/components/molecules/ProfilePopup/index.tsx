'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import ProfileButton from '@/components/atoms/ProfileButton';
import PopupBox, { TItem } from './PopupBox';
import styles from './index.module.scss';

const popupItems: TItem[] = [
  {
    link: '/my',
    text: '마이프로필',
    icon: 'user',
  },
  {
    text: '로그아웃',
    clickHandler: () => {
      alert('리뷰');
    },
    icon: 'logout',
  },
];

const ProfilePopup = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const popupBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (isShow && popupBoxRef.current && !popupBoxRef.current.contains(e.target as Node)) {
        setIsShow(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isShow]);

  return (
    <div className={clsx(styles.profilePopup)}>
      <ProfileButton imgSrc="/images/image 9.png" usage="header" onClick={() => setIsShow(true)} />
      <PopupBox items={popupItems} isShow={isShow} ref={popupBoxRef} />
    </div>
  );
};

export default ProfilePopup;
