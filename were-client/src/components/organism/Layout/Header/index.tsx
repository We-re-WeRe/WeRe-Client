'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '@/components/molecules/NavigationBar';
import SearchBar from '@/components/molecules/SearchBar';
import TextButton from '@/components/atoms/TextButton';
import ProfilePopup from '@/components/molecules/ProfilePopup';
import styles from './index.module.scss';
import HeaderRight from './HeaderRight';

const Header = () => {
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
        <HeaderRight />
      </nav>
    </div>
  );
};

export default Header;
