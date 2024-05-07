import clsx from 'clsx';
import React from 'react';
import NavigationBar from '@/components/molecules/NavigationBar';
import SearchBar from '@/components/molecules/SearchBar';
import TextButton from '@/components/atoms/TextButton';
import ProfilePopup from '@/components/molecules/ProfilePopup';
import styles from './index.module.scss';

const Header = () => {
  const isLogin = true;

  return (
    <div className={clsx(styles.headerWrapper)}>
      <nav className={clsx(styles.header)}>
        <NavigationBar />
        <div className={clsx(styles.headerRight)}>
          <ul className={clsx(styles.userItems)}>
            <li>
              <SearchBar />
            </li>
            <li>{!isLogin ? <TextButton size="medium">로그인</TextButton> : <ProfilePopup />}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
