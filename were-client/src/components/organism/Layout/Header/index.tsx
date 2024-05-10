'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '@/components/molecules/NavigationBar';
import SearchBar from '@/components/molecules/SearchBar';
import TextButton from '@/components/atoms/TextButton';
import ProfilePopup from '@/components/molecules/ProfilePopup';
import styles from './index.module.scss';

const Header = () => {
  const isLogin = true;
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const [transparent, setTransparent] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !transparent) {
        setTransparent(true);
        return;
      }
      if (window.scrollY === 0 && transparent) {
        setTransparent(false);
      }
    };

    const throttleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          handleScroll();
          throttleTimeout.current = null;
        }, 50);
      }
    };

    window.addEventListener('scroll', throttleScroll);
    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, [transparent]);

  return (
    <div className={clsx(styles.headerWrapper, { [styles.scrolling]: transparent })}>
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
