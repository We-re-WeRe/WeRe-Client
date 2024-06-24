import Introducing from '@/components/molecules/Introducing';
import ProfileBox from '@/components/molecules/ProfileBox';
import clsx from 'clsx';
import React from 'react';
import { IUser } from '@/types/user';
import styles from './index.module.scss';

interface Props {
  user: IUser;
}

const UserpageInfo = ({ user }: Props) => {
  return (
    <div className={clsx(styles.userpageInfo)}>
      <ProfileBox imgSrc={user.imageURL} edit={false} />
      <div className={clsx(styles.userpageIntro)}>
        <Introducing nickname={user.nickname} follower={user.totalFollowers} introduce={user.introduceMe} />
      </div>
    </div>
  );
};

export default UserpageInfo;
