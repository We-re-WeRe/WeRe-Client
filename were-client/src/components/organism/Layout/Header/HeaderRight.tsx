import React from 'react';
import styles from './index.module.scss';
import SearchBar from '@/components/molecules/SearchBar';
import useUserState from '@/hooks/useUserState';
import ProfilePopup from '@/components/molecules/ProfilePopup';
import Link from 'next/link';

const HeaderRight = () => {
  const { user, isLoading } = useUserState();
  return (
    <div className={styles.headerRight}>
      <ul className={styles.userItems}>
        <li>
          <SearchBar />
        </li>
        {!isLoading && <li>{user ? <ProfilePopup user={user} /> : <Link href="/login">로그인</Link>}</li>}
      </ul>
    </div>
  );
};

export default HeaderRight;
