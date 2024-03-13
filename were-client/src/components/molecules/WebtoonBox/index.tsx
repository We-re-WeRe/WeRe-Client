import ImageButton from '@/components/atoms/ImageButton';
import NormalText from '@/components/atoms/NormalText';
import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';
import IconText from '@/components/molecules/IconText';

interface Props {
  title: string;
  author: string;
  stars: number;
  reviews: number;
  imageUrl: string;
  link: string;
}

const WebtoonBox = ({ title, author, stars, reviews, imageUrl, link }: Props) => {
  return (
    <div>
      <ImageButton usage="thumbnail" imgSrc={imageUrl} />
      <div className={clsx(styles.webtoonBoxInfo)}>
        <TextButton size="medium" link={' '}>
          {title}
        </TextButton>
        <TextButton size="small" link={author}>
          {author}
        </TextButton>
        <div className={clsx(styles.addInfo)}>
          <IconText type="star" text={stars} size="sm"></IconText>
          <IconText type="review" text={reviews} size="sm"></IconText>
        </div>
      </div>
    </div>
  );
};

export default WebtoonBox;
