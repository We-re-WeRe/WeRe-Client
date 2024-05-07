import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './index.module.scss';
import { IconBack, IconMenu, IconSearch, IconStar } from '../../../../public/assets';

type TIcon = 'menu' | 'back' | 'star' | 'blank-star' | 'search';

interface Props {
  size: number;
  type: TIcon;
  onClick?: () => void;
  link?: string;
}

const Icon = (type: TIcon, size: number) => {
  switch (type) {
    case 'menu':
      return <IconMenu width={size} height={size} fill="#ffffff" />;
    case 'star':
      return <IconStar width={size} height={size} fill="#F9E000" />;
    case 'blank-star':
      return <IconStar width={size} height={size} fill="#D9D9D9" />;
    case 'back':
      return <IconBack width={size} height={size} fill="#ffffff" />;
    case 'search':
      return <IconSearch width={size} height={size} stroke="#ffffff" />;
    default:
      return <IconBack width={size} height={size} fill="#000000" />;
  }
};

const IconButton = ({ type, size, link, onClick }: Props) => {
  if (link) {
    return <Link href={link}>{Icon(type, size)}</Link>;
  }
  return (
    <div className={clsx(styles.iconButton)} onClick={onClick} role="presentation">
      {Icon(type, size)}
    </div>
  );
};

export default IconButton;
