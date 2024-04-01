import NormalText from '@/components/atoms/NormalText';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './index.module.scss';

export type TItem = {
  link: string;
  text: string;
  clickHandler?: () => void;
};
interface Props {
  items: TItem[];
  isShow: boolean;
}

const PopupBox = ({ items, isShow }: Props) => {
  return (
    isShow && (
      <div className={clsx(styles.popupWrapper)}>
        {items.map(item => (
          <Link key={item.text} href={item.link}>
            <div className={clsx(styles.popupItem)} onClick={item.clickHandler} role="presentation">
              <NormalText>{item.text}</NormalText>
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default PopupBox;
