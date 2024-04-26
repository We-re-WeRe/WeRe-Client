import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import NormalText from '@/components/atoms/NormalText';
import styles from './index.module.scss';
import IconText from '../IconText';

interface Props {
  image: string | StaticImageData;
  name: string;
  follower: number;
}

const SmallProfileBox = ({ image, name, follower }: Props) => {
  return (
    <div className={clsx(styles.storageProfile)}>
      <div className={clsx(styles.storageProfileImagePart)}>
        <Image src={image} alt="profile" width={100} height={100} style={{ borderRadius: '50%' }} />
      </div>
      <div className={clsx(styles.storageProfileTextPart)}>
        <NormalText>{name}</NormalText>
        <IconText type="follower" text={follower} size="sm" />
      </div>
    </div>
  );
};

export default SmallProfileBox;
