import SmallProfileBox from '@/components/molecules/SmallProfileBox';
import StorageInfo from '@/components/molecules/StorageInfo';
import StorageWebtoonInfoList from '@/components/organism/StorageWebtoonInfoList';
import { StaticImageData } from 'next/image';
import ColorThief from '@/lib/ColorThief';
import CanvasImage from '@/lib/CanvasImage';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface ITag {
  tagName: string;
  link?: string;
}

interface IInfo {
  thumbnail: StaticImageData;
  open: boolean;
  title: string;
  tagList: ITag[];
  introducing: string;
  like: number;
  date: string;
}

interface IProfile {
  image: string | StaticImageData;
  name: string;
  follower: number;
  link?: string;
}

interface IWebtoonReview {
  reviewStar: number;
  reviewContent: string;
  reviewLike: number;
  webtoonLink: string;
}

interface IWebtoon {
  webtoonThumbnail: string | StaticImageData;
  webtoonTitle: string;
  webtoonAuthor: string;
  webtoonLike: number;
  webtoonReviewInfo?: IWebtoonReview;
}

interface IColor {
  r: number;
  g: number;
  b: number;
}

interface Props {
  info: IInfo;
  profile: IProfile;
  webtoons: IWebtoon[];
}

const StorageInfoTemplate = ({ info, profile, webtoons }: Props) => {
  const [colors, setColors] = useState<IColor[]>([]);
  useEffect(() => {
    const image = new Image();
    image.src = info.thumbnail.src;

    image.onload = () => {
      setColors(ColorThief.getPalette(new CanvasImage(image), 2));
    };
  }, [info.thumbnail.src]);

  return (
    <div className={styles.storageInfoContent}>
      <div
        className={styles.topContentWrapper}
        style={{
          background:
            colors.length > 0
              ? `linear-gradient(135deg, rgb(${colors[0].r / 2},${colors[0].g / 2},${colors[0].b / 2}) 0%,rgb(${colors[1].r / 2},${colors[1].g / 2},${colors[1].b / 2}) 100%)`
              : '',
        }}
      >
        <StorageInfo
          thumbnail={info.thumbnail}
          open={info.open}
          title={info.title}
          tagList={info.tagList}
          introducing={info.introducing}
          like={info.like}
          date={info.date}
        />
      </div>
      <div className={styles.bottomContentsWrapper}>
        <div className={styles.profileContent}>
          <SmallProfileBox image={profile.image} name={profile.name} follower={profile.follower} />
        </div>
        <div className={styles.webtoonListContent}>
          <StorageWebtoonInfoList webtoonInfos={webtoons} edit={false} />
        </div>
      </div>
    </div>
  );
};

export default StorageInfoTemplate;
