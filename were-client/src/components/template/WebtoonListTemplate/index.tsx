import WebtoonCategory from '@/components/organism/WebtoonCategory';
import WebtoonList from '@/components/organism/WebtoonList';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

const webtoons = [
  {
    title: '임건우',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },

  {
    title: '임건우 시즌 2',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test2.png',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 3',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test3.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 4',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 5',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test5.png',
    link: 'ghd',
  },
  {
    title: '임건우',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },

  {
    title: '임건우 시즌 2',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test2.png',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 3',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test3.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 4',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 5',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test5.png',
    link: 'ghd',
  },
  {
    title: '임건우',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },

  {
    title: '임건우 시즌 2',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test2.png',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 3',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test3.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 4',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 5',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test5.png',
    link: 'ghd',
  },
  {
    title: '임건우',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },

  {
    title: '임건우 시즌 2',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test2.png',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 3',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test3.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 4',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 5',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test5.png',
    link: 'ghd',
  },
  {
    title: '임건우',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },

  {
    title: '임건우 시즌 2',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test2.png',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 3',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test3.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 4',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test.jpg',
    link: 'ghd',
  },
  {
    title: '임건우 시즌 5',
    author: '채승규',
    stars: 20,
    reviews: 129,
    imageUrl: '/images/test5.png',
    link: 'ghd',
  },
];

const WebtoonListTemplate = () => {
  return (
    <div className={clsx(styles.webtoonListTemplate)}>
      <div className={clsx(styles.templateWrapper)}>
        <WebtoonCategory />
        <WebtoonList webtoons={webtoons} />
      </div>
    </div>
  );
};

export default WebtoonListTemplate;
