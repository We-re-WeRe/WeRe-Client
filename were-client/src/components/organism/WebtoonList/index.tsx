import WebtoonBox from '@/components/molecules/WebtoonBox';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

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
    </div>
  );
};

export default WebtoonList;
