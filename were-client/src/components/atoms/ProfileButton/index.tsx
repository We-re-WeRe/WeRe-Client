import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import defaultProfile from '@/../public/images/default-profile.png';
import styles from './index.module.scss';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  imgSrc?: string;
  link?: string;
  usage: 'review' | 'header' | 'mypage' | 'storage';
}

type typeName = 'review' | 'header' | 'mypage' | 'storage';

type imgType = {
  [k in typeName]: {
    width: number;
    height: number;
  };
};

const usageSize: imgType = {
  review: {
    width: 11,
    height: 11,
  },
  header: {
    width: 60,
    height: 60,
  },
  mypage: {
    width: 202,
    height: 202,
  },
  storage: {
    width: 113,
    height: 113,
  },
};

const ProfileButton = ({ onClick, disabled, type, imgSrc, link, usage }: Props) => {
  if (link) {
    return (
      <Link href={link} className={clsx(styles.profileButton, styles[usage])}>
        <Image
          src={imgSrc ?? defaultProfile}
          alt="profile"
          width={usageSize[usage].width}
          height={usageSize[usage].height}
          style={{ borderRadius: '50%', border: '1px solid #d9d9d9' }}
        />
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={clsx(styles.profileButton, styles[usage])} onClick={onClick}>
      <Image
        src={imgSrc ?? defaultProfile}
        alt="profile"
        width={usageSize[usage].width}
        height={usageSize[usage].height}
        style={{ borderRadius: '50%', border: '1px solid #d9d9d9' }}
      />
    </button>
  );
};

export default ProfileButton;
