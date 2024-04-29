import WebtoonInfoDescription from '@/components/molecules/WebtoonInfoDescription';
import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CanvasImage from '@/lib/CanvasImage';
import ColorThief from '@/lib/ColorThief';
import WebtoonInfoUserItems from '@/components/molecules/WebtoonInfoUserItems';
import styles from './index.module.scss';
import testImage from '../../../../public/images/test3.jpg';

interface IColor {
  r: number;
  g: number;
  b: number;
}

const WEBTOON_IMAGE_SIZE = {
  width: 200,
  height: 240,
} as const;

const WebtoonInfo = () => {
  const [colors, setColors] = useState<IColor[]>([]);
  useEffect(() => {
    const image = new Image();
    image.src = testImage.src;

    image.onload = () => {
      setColors(ColorThief.getPalette(new CanvasImage(image), 2));
    };
  }, []);

  return (
    <div
      className={clsx(styles.webtoonInfoBackground)}
      style={{
        background:
          colors.length > 0
            ? `linear-gradient(135deg, rgb(${colors[0].r / 2},${colors[0].g / 2},${colors[0].b / 2}) 0%,rgb(${colors[1].r / 2},${colors[1].g / 2},${colors[1].b / 2}) 100%)`
            : '',
      }}
    >
      <div className={clsx(styles.webtoonInfoWrapper)}>
        <div className={clsx(styles.webtoonInfoArea)}>
          <NextImage src={testImage} alt="" width={WEBTOON_IMAGE_SIZE.width} height={WEBTOON_IMAGE_SIZE.height} />
          <WebtoonInfoDescription />
        </div>
        <div className={clsx(styles.userItemsArea)}>
          <WebtoonInfoUserItems />
        </div>
      </div>
    </div>
  );
};

export default WebtoonInfo;
