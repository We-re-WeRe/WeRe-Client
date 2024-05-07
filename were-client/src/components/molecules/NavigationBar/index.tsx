'use client';

import clsx from 'clsx';
import React from 'react';
import { Handjet } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.scss';

const handjet = Handjet({ weight: ['500', '700'], subsets: ['latin'] });

interface INavi {
  text: string;
  link: string;
  isMain?: boolean;
}

const NAV_LIST: INavi[] = [
  { text: '웹툰추천', link: '/collection' },
  { text: 'WeRe', link: '/', isMain: true },
  { text: '전체웹툰', link: '/all' },
];

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <ul className={clsx(styles.navigationBar, handjet.className)}>
      {NAV_LIST.map(navi => (
        <li key={navi.text} className={clsx({ [styles.logo]: navi.isMain, [styles.active]: pathname === navi.link })}>
          <Link href={navi.link}>{navi.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationBar;
