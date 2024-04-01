import NormalText from '@/components/atoms/NormalText';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './index.module.scss';

type TItem = {
  link: string;
  text: string;
  clickHandler?: () => void;
};
interface props {
  items: TItem[];
  isShow: boolean;
}

const dummyItems = [
  {
    link: '',
    text: '보러가기',
  },
  {
    link: '',
    text: '리뷰쓰기',
  },
  {
    link: '',
    text: '리뷰쓰기리뷰',
  },
];

const PopupBox = () => {
  return (
    <div className={clsx(styles.popupWrapper)}>
      {dummyItems.map(item => (
        <Link key={item.text} href={item.link}>
          <div className={clsx(styles.popupItem)}>
            <NormalText>{item.text}</NormalText>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopupBox;
