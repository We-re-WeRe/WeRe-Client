'use client';
import TextButton from '@/components/atoms/TextButton';
import TitleText from '@/components/atoms/TitleText';
import StorageBox from '@/components/molecules/StorageBox';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getStoragesWithWebtoon } from '@/service/storage';
import { IStorage } from '@/types/storage';
import Skeleton from './Skeleton';

const WebtoonInfoStorageList = () => {
  const titleId = parseInt(useSearchParams().get('titleId')!);
  const { data } = useSuspenseQuery({
    queryKey: ['webtoon', titleId, 'storage'],
    queryFn: (): Promise<IStorage[]> => getStoragesWithWebtoon(titleId),
  });
  return (
    <div className={clsx(styles.webtoonInfoStorageList)}>
      <div className={clsx(styles.header)}>
        <TitleText size="medium" color="white">
          해당 웹툰이 들어간 보관함
        </TitleText>
        <TextButton link="a" size="medium">
          더보기
        </TextButton>
      </div>
      <li className={clsx(styles.storageList)}>
        {data.map(storage => (
          <StorageBox storage={storage} key={storage.id} />
        ))}
      </li>
    </div>
  );
};

export default WebtoonInfoStorageList;
