import React from 'react';
import Link from 'next/link';
import { IconBack, IconMenu } from '../../../../public/assets';

type TIcon = 'menu' | 'back';

interface Props {
  size: number;
  type: TIcon;
  onClick?: () => void;
  link?: string;
}

const Icon = (type: TIcon, size: number) => {
  switch (type) {
    case 'menu':
      return <IconMenu width={size} height={size} fill="#000000" />;
    default:
      return <IconBack width={size} height={size} fill="#000000" />;
  }
};

const IconButton = ({ type, size, link, onClick }: Props) => {
  if (link) {
    return <Link href={link}>{Icon(type, size)}</Link>;
  }
  return (
    <div onClick={onClick} role="presentation">
      {Icon(type, size)}
    </div>
  );
};

export default IconButton;
