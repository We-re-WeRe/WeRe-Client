import Introducing from '@/components/molecules/Introducing';
import ProfileBox from '@/components/molecules/ProfileBox';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

interface Props {
  image?: string;
  nickname: string;
  follower: number;
  introduce: string;
}

const UserpageInfo = ({ image, nickname, follower, introduce }: Props) => {
  return (
    <div className={clsx(styles.userpageInfo)}>
      <ProfileBox imgSrc={image} edit={false} />
      <div className={clsx(styles.userpageIntro)}>
        <Introducing nickname={nickname} follower={follower} introduce={introduce} />
      </div>
    </div>
  );
};

export default UserpageInfo;
