import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './index.module.scss';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  imgSrc: string | StaticImageData;
  link?: string;
  usage: 'thumbnail' | 'logo' | 'filter' | 'more';
  className?: string;
}

type typeName = 'thumbnail' | 'logo' | 'filter' | 'more';

type imgType = {
  [k in typeName]: {
    width: number;
    height: number;
  };
};

const usageSize: imgType = {
  thumbnail: {
    width: 160,
    height: 200,
  },
  logo: {
    width: 171,
    height: 58,
  },
  filter: {
    width: 50,
    height: 50,
  },
  more: {
    width: 5,
    height: 15,
  },
};

const ImageButton = ({ onClick, disabled, type, imgSrc, link, usage, className }: Props) => {
  if (link) {
    return (
      <Link href={link} className={clsx(styles.imageButton, styles[usage], className)}>
        <Image src={imgSrc} alt="no Image" width={usageSize[usage].width} height={usageSize[usage].height} />
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(styles.imageButton, styles[usage], className)}
      onClick={onClick}
    >
      <Image src={imgSrc} alt="no Image" width={usageSize[usage].width} height={usageSize[usage].height} />
    </button>
  );
};

export default ImageButton;
