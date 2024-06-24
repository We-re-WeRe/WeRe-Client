import UserpageInfo from '@/components/organism/UserpageInfo';
import UserpageUnderContents from '@/components/organism/UserpageUnderContents';
import React from 'react';
import { IUser } from '@/types/user';
import styles from './index.module.scss';

interface Props {
  user: IUser;
}

const UserPageTemplate = ({ user }: Props) => {
  return (
    <div className={styles.userpageWrapper}>
      <UserpageInfo user={user} />
      <UserpageUnderContents id={user.id} />
    </div>
  );
};

export default UserPageTemplate;
