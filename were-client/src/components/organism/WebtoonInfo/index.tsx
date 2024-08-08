'use client';
import WebtoonInfoDescription from '@/components/molecules/WebtoonInfoDescription';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CanvasImage from '@/lib/CanvasImage';
import ColorThief from '@/lib/ColorThief';
import WebtoonInfoUserItems from '@/components/molecules/WebtoonInfoUserItems';
import IconButton from '@/components/atoms/IconButton';
import styles from './index.module.scss';
import { useSearchParams } from 'next/navigation';
import { useWebtoonDetail } from '@/hooks/useWebtoon';

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
  const titleId = parseInt(useSearchParams().get('titleId')!);

  const { data: info } = useWebtoonDetail(titleId);

  useEffect(() => {
    if (info) {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = `${process.env.NEXT_PUBLIC_IMG_PROXY_URL}${info.imageURL}`;
      image.onload = () => {
        setColors(ColorThief.getPalette(new CanvasImage(image), 2));
      };
    }
  }, []);

  return (
    <div
      className={clsx(styles.webtoonInfoBackground)}
      style={{
        background:
          colors.length > 0
            ? `linear-gradient(135deg, rgb(${colors[0].r / 2},${colors[0].g / 2},${colors[0].b / 2}) 0%,rgb(${colors[1].r / 2},${colors[1].g / 2},${colors[1].b / 2}) 100%)`
            : 'linear-gradient(330deg,rgb(255,255,255,0.5),rgb(255,255,255,0)',
      }}
    >
      <div className={clsx(styles.webtoonInfoWrapper)}>
        <div className={clsx(styles.webtoonInfoArea)}>
          <img
            src={`${process.env.NEXT_PUBLIC_IMG_PROXY_URL}${info.imageURL}`}
            alt=""
            width={WEBTOON_IMAGE_SIZE.width}
            height={WEBTOON_IMAGE_SIZE.height}
          />
          <WebtoonInfoDescription
            title={info.title}
            description={info.explain}
            authors={info.author}
            painters={info.painter}
            tags={[]}
            genre={info.genre}
          />
          <div className={clsx(styles.backButton)}>
            <IconButton
              size={24}
              type="back"
              onClick={() => {
                window.history.go(-1);
              }}
            />
          </div>
        </div>
      </div>
      <div className={clsx(styles.userItemsArea)}>
        <WebtoonInfoUserItems titleId={info.id} like={info.like} />
      </div>
    </div>
  );
};

export default WebtoonInfo;
