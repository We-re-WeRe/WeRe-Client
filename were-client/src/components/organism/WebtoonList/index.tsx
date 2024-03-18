import WebtoonBox from '@/components/molecules/WebtoonBox';
import styles from './index.module.scss';
import clsx from 'clsx';
import React from 'react';
import { link } from 'fs';

interface IWebtoon {
  title: string;
  author: string;
  stars: number;
  reviews: number;
  imageUrl: string;
  link: string;
}

interface Props {
  webtoons?: IWebtoon[];
}

const WebtoonList = ({ webtoons }: Props) => {
  if (!webtoons) {
    return <div className={clsx(styles.noWebtoons)}>불러올 웹툰 리스트가 없습니다.</div>;
  }

  return (
    <div className={clsx(styles.webtoonList)}>
      {webtoons.map(webtoon => (
        <WebtoonBox
          key={webtoon.link}
          title={webtoon.title}
          author={webtoon.author}
          stars={webtoon.stars}
          reviews={webtoon.reviews}
          link={webtoon.link}
          imageUrl={webtoon.imageUrl}
        />
      ))}
      <WebtoonBox
        title="나노마신"
        author="임건우"
        stars={9.1}
        reviews={121}
        imageUrl="https://image.aladin.co.kr/product/14439/44/cover500/e862433886_2.jpg"
        link="/h"
      />
      <WebtoonBox
        title="나노마신"
        author="임건우"
        stars={9.1}
        reviews={121}
        imageUrl="https://image.aladin.co.kr/product/14439/44/cover500/e862433886_2.jpg"
        link="/h"
      />
    </div>
  );
};

export default WebtoonList;
