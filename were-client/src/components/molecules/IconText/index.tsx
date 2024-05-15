import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { IconLike, IconReview, IconStar, IconFollower, IconLogout, IconUser } from '@/../public/assets';
import NormalText from '../../atoms/NormalText';
import styles from './index.module.scss';

type TIcon = 'like' | 'star' | 'review' | 'follower' | 'user' | 'logout';

interface Props {
  type: TIcon;
  text: string | number;
  size: 'sm' | 'md';
}
type TSizeObj = {
  icon: number;
  text: 'sm' | 'md';
};

type TIconTextSize = {
  [k: string]: TSizeObj;
  sm: TSizeObj;
  md: TSizeObj;
};

const Icon = (type: TIcon, size: number): ReactNode => {
  switch (type) {
    case 'like':
      return <IconLike width={size} height={size} />;
    case 'review':
      return <IconReview width={size} height={size} fill="#ffffff" />;
    case 'star':
      return <IconStar width={size} height={size} fill="#F9E000" />;
    case 'follower':
      return <IconFollower width={size} height={size} fill="#000000" />;
    case 'logout':
      return <IconLogout width={size} height={size} fill="#000000" />;
    case 'user':
      return <IconUser width={size} height={size} fill="#000000" />;
    default:
      return <IconLike />;
  }
};

const IconTextSize: TIconTextSize = {
  sm: {
    icon: 16,
    text: 'sm',
  },
  md: {
    icon: 20,
    text: 'md',
  },
};

const IconTextColor = (type: TIcon) => {
  switch (type) {
    case 'like':
      return 'red';
    case 'review':
      return 'white';
    case 'star':
      return 'yellow';
    case 'follower':
      return 'white';
    case 'logout':
    case 'user':
      return 'black';
    default:
      return 'white';
  }
};

const IconText = ({ type, text, size }: Props) => {
  return (
    <div className={clsx(styles.iconText)}>
      {Icon(type, IconTextSize[size].icon)}
      <NormalText size={IconTextSize[size].text} color={IconTextColor(type)}>
        {text}
      </NormalText>
    </div>
  );
};

export default IconText;
