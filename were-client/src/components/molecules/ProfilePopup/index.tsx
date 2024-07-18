'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import ProfileButton from '@/components/atoms/ProfileButton';
import PopupBox from './PopupBox';
import styles from './index.module.scss';
import { IUserBase } from '@/types/user';

interface Props {
  user: IUserBase;
}

const ProfilePopup = ({ user }: Props) => {
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
      <ProfileButton imgSrc={user.imageURL} usage="header" onClick={() => setIsShow(true)} />
      <PopupBox isShow={isShow} ref={popupBoxRef} />
    </div>
  );
};

export default ProfilePopup;
