import ImageButton from '@/components/atoms/ImageButton';
import TextButton from '@/components/atoms/TextButton';
import IconText from '@/components/molecules/IconText';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';
import { authorsInWebtoonList } from '@/util/author';
import { IWebtoon } from '@/types/webtoon';

interface Props {
  webtoon: IWebtoon;
}

const WebtoonBox = ({ webtoon }: Props) => {
  const {
    title,
    author: authors,
    painter: painters,
    totalStarPoint: stars,
    reviewCount: reviews,
    imageURL,
    id,
  } = webtoon;

  return (
    <div>
      <ImageButton
        usage="thumbnail"
        imgSrc={`${process.env.NEXT_PUBLIC_IMG_PROXY_URL}${imageURL}`}
        link={`/webtoon/info/list?titleId=${id}`}
      />
      <div className={clsx(styles.webtoonBoxInfo)}>
        <div className={styles.titleSection}>
          <TextButton size="medium" link={' '}>
            {title}
          </TextButton>
        </div>
        <div className={styles.authorSection}>
          <TextButton size="medium" link={authors[0]}>
            {authorsInWebtoonList(authors, painters)}
          </TextButton>
        </div>

        <div className={clsx(styles.addInfo)}>
          <IconText type="star" text={`${stars}`} size="sm" />
          <IconText type="review" text={`${reviews}`} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default WebtoonBox;
