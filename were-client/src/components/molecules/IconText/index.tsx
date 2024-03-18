import React, { ReactNode } from 'react';
import { IconLike, IconReview, IconStar, IconFollower } from '@/../public/assets';
import NormalText from '../../atoms/NormalText';
import clsx from 'clsx';
import styles from './index.module.scss';

type TIcon = 'like' | 'star' | 'review' | 'follower';

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
      return <IconReview width={size} height={size} fill="#000000" />;
    case 'star':
      return <IconStar width={size} height={size} fill="#F9E000" />;
    case 'follower':
      return <IconFollower width={size} height={size} fill="212121" />;
    default:
      return;
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

const IconText = ({ type, text, size }: Props) => {
  return (
    <div className={clsx(styles.iconText)}>
      {Icon(type, IconTextSize[size].icon)}
      <NormalText size={IconTextSize[size].text}>{text}</NormalText>
    </div>
  );
};

export default IconText;
