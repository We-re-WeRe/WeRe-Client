import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import a from '../../../../public/images/test.jpg';
import IconText from '../IconText';
import styles from './index.module.scss';

const WEBTOON_IMAGE_SIZE = {
  width: 250,
  height: 250,
} as const;

const WebtoonInfoImage = () => {
  return (
    <div className={clsx(styles.webtoonInfoImage)}>
      <Image src={a} alt="" width={WEBTOON_IMAGE_SIZE.width} height={WEBTOON_IMAGE_SIZE.height} />
      <div className={clsx(styles.addtionalInfo)}>
        <IconText type="star" text="9.8" size="md" />
        <IconText type="like" text="9.8" size="md" />
      </div>
    </div>
  );
};

export default WebtoonInfoImage;
