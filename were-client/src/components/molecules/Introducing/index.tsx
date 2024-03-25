import React from 'react';
import clsx from 'clsx';
import TitleText from '@/components/atoms/TitleText';
import NormalText from '@/components/atoms/NormalText';
import styles from './index.module.scss';
import IconText from '../IconText';

interface Props {
  nickname: string;
  follower: number;
  introduce: string;
}

const Introducing = ({ nickname, follower, introduce }: Props) => {
  return (
    <div className={clsx(styles.introducing)}>
      <div className={clsx(styles.titlePart)}>
        <TitleText size="large">{nickname}님</TitleText>
      </div>
      <div className={clsx(styles.followerPart)}>
        <IconText type="follower" text={follower} size="sm" />
      </div>
      <div className={clsx(styles.introducePart)}>
        <NormalText description>{introduce}</NormalText>
      </div>
    </div>
  );
};

export default Introducing;
