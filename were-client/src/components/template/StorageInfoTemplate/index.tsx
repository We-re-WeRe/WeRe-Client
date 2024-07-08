import React, { useEffect, useState } from 'react';

import SmallProfileBox from '@/components/molecules/SmallProfileBox';
import StorageInfo from '@/components/molecules/StorageInfo';
import StorageWebtoonInfoList from '@/components/organism/StorageWebtoonInfoList';

import ColorThief from '@/lib/ColorThief';
import CanvasImage from '@/lib/CanvasImage';

import Test from '@/../public/images/testThumbnail.png';

import { IStorageDetail } from '@/types/storage';
import { getStoragesDetail } from '@/service/storage';
import { useSuspenseQuery } from '@tanstack/react-query';

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
  console.log(colors);

  const { data: infoStorage } = useSuspenseQuery({
    queryKey: ['storages', id],
    queryFn: (): Promise<IStorageDetail> => getStoragesDetail(id),
  });

  useEffect(() => {
    if (infoStorage.imageURL) {
      const image = new Image();
      image.src = infoStorage.imageURL;

      image.onload = () => {
        setColors(ColorThief.getPalette(new CanvasImage(image), 2));
      };
    }
  }, []);

  return (
    <div>
      {infoStorage ? (
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
            <StorageInfo info={infoStorage} />
          </div>
          <div className={styles.bottomContentsWrapper}>
            <div className={styles.profileContent}>
              <SmallProfileBox
                image={infoStorage.user.imageURL ? infoStorage.user.imageURL : Test}
                name={infoStorage.user.nickname}
                follower={infoStorage.user.totalFollowers}
              />
            </div>
            <div className={styles.webtoonListContent}>
              <StorageWebtoonInfoList id={infoStorage.id} edit={infoStorage.isMine} />
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
