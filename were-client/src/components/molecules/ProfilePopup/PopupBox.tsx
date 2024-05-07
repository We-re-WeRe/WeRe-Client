import NormalText from '@/components/atoms/NormalText';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './index.module.scss';
import IconText from '../IconText';

export type TItem = {
  link?: string;
  text: string;
  clickHandler?: () => void;
  icon: 'user' | 'logout';
};
interface Props {
  items: TItem[];
  isShow: boolean;
}

const PopupBox = React.forwardRef<HTMLDivElement, Props>(({ items, isShow }, ref) => {
  return (
    isShow && (
      <div className={clsx(styles.popupWrapper)} ref={ref}>
        {items.map(item =>
          item.link ? (
            <Link key={item.text} href={item.link} className={clsx(styles.popupItem)}>
              <IconText type={item.icon} text={item.text} size="sm" />
            </Link>
          ) : (
            <div key={item.text} className={clsx(styles.popupItem)} onClick={item.clickHandler} role="presentation">
              <IconText type={item.icon} text={item.text} size="sm" />
            </div>
          ),
        )}
      </div>
    )
  );
});

export default PopupBox;
