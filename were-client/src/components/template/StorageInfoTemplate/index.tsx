import SmallProfileBox from '@/components/molecules/SmallProfileBox';
import StorageInfo from '@/components/molecules/StorageInfo';
import StorageWebtoonInfoList from '@/components/organism/StorageWebtoonInfoList';
import ColorThief from '@/lib/ColorThief';
import CanvasImage from '@/lib/CanvasImage';
import Test from '@/../public/images/testThumbnail.png';
import React, { useEffect, useState } from 'react';
import { IStorageWebtoon } from '@/types/webtoon';
import { IStorageDetail } from '@/types/storage';
import { getStoragesDetail } from '@/service/storage';
import { getStorageWebtoonList } from '@/service/webtoon';
import styles from './index.module.scss';

interface IColor {
  r: number;
  g: number;
  b: number;
}

interface Props {
  id: number;
}

const StorageInfoTemplate = ({ id }: Props) => {
  const [colors, setColors] = useState<IColor[]>([]);
  const [info, setInfo] = useState<IStorageDetail>();
  const [webtoons, setWebtoons] = useState<IStorageWebtoon[]>();

  useEffect(() => {
    const fetchData = async () => {
      const storageInfoData = await getStoragesDetail(id);
      const storageWebtoonsData = await getStorageWebtoonList(id);

      setInfo(storageInfoData);
      setWebtoons(storageWebtoonsData);
    };

    fetchData();
  }, [id, info?.createdAt]);

  useEffect(() => {
    if (info?.imageURL) {
      const image = new Image();
      image.src = info.imageURL;

      image.onload = () => {
        setColors(ColorThief.getPalette(new CanvasImage(image), 2));
      };
    }
  });

  return (
    <div>
      {info ? (
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
            <StorageInfo info={info} />
          </div>
          <div className={styles.bottomContentsWrapper}>
            <div className={styles.profileContent}>
              <SmallProfileBox
                image={info.user.imageURL ? info.user.imageURL : Test}
                name={info.user.nickname}
                follower={info.user.totalFollowers}
              />
            </div>
            <div className={styles.webtoonListContent}>
              <StorageWebtoonInfoList webtoonInfos={webtoons} edit={info.user.isMine} />
            </div>
          </div>
        </div>
      ) : (
        <div>해당 보관함은 존재하지 않습니다.</div>
      )}
    </div>
  );
};

export default StorageInfoTemplate;
