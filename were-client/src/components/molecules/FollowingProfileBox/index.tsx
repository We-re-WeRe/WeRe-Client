import React from 'react';
import clsx from 'clsx';
import ProfileButton from '@/components/atoms/ProfileButton';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';
import IconText from '../IconText';

interface Props {
  image?: string;
  name: string;
  follower: number;
  link: string;
}

const FollowingProfileBox = ({ image, name, follower, link }: Props) => {
  return (
    <div className={clsx(styles.commonFollowingProfileBox)}>
      <ProfileButton usage="storage" imgSrc={image} />
      <div className={clsx(styles.profileTextSection)}>
        <TextButton size="small" link={link}>
          {name}
        </TextButton>
        <IconText type="follower" text={follower} size="sm" />
      </div>
    </div>
  );
};

export default FollowingProfileBox;
