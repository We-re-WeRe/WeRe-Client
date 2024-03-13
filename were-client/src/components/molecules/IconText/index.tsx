import React from 'react';
import { IconLike, IconReview, IconStar } from '@/../public/assets';
import NormalText from '../../atoms/NormalText';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  type: 'like' | 'star' | 'review';
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

const Icon = {
  star: <IconStar width={16} height={16} fill="#F9E000" />,
  review: <IconReview width={16} height={16} fill="#000000" />,
  like: <IconLike width={16} height={16} />,
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
      {Icon[type]}
      <NormalText size={IconTextSize[size].text}>{text}</NormalText>
    </div>
  );
};

export default IconText;
