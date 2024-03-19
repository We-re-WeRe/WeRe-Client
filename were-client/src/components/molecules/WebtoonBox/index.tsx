import ImageButton from '@/components/atoms/ImageButton';
import TextButton from '@/components/atoms/TextButton';
import IconText from '@/components/molecules/IconText';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

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
      <ImageButton usage="thumbnail" imgSrc={imageUrl} link={link} />
      <div className={clsx(styles.webtoonBoxInfo)}>
        <TextButton size="medium" link={' '}>
          {title}
        </TextButton>
        <TextButton size="medium" link={author}>
          {author}
        </TextButton>
        <div className={clsx(styles.addInfo)}>
          <IconText type="star" text={stars} size="sm" />
          <IconText type="review" text={reviews} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default WebtoonBox;
