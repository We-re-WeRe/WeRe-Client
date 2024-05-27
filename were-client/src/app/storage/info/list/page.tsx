'use client';

import StorageInfoTemplate from '@/components/template/StorageInfoTemplate';
import Error from 'next/error';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const StorageInfoPage = () => {
  const params = useSearchParams();

  if (!params.get('titleId')) {
    return <Error statusCode={404} />;
  }

  return (
    <StorageInfoTemplate
      info={{
        thumbnail: 'image',
        open: true,
        title: '임선생의 야릇한 밤',
        tagList: [
          { tagName: '여캐', link: 'a' },
          { tagName: '섹시', link: 'b' },
          { tagName: '스토리불문여캐그림체고트', link: 'c' },
          { tagName: '믿보임', link: 'd' },
        ],
        introducing: '.',
        like: 887,
        date: '2023.08.13',
      }}
      profile={{ image: 'image', name: '임선생', follower: 2, link: 'a' }}
      webtoons={[
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이들',
          webtoonAuthor: '임선생a',
          webtoonLike: 327,
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이들',
          webtoonAuthor: '임선생b',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'b',
          },
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이들',
          webtoonAuthor: '임선생c',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'c',
          },
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이',
          webtoonAuthor: '임선생d',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'd',
          },
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이들',
          webtoonAuthor: '임선생e',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'e',
          },
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이들',
          webtoonAuthor: '임선생f',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'f',
          },
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우와 아이들',
          webtoonAuthor: '임선생g',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'g',
          },
        },
        {
          webtoonThumbnail: 'image',
          webtoonTitle: '건우의 아이들',
          webtoonAuthor: '임선생h',
          webtoonLike: 327,
          webtoonReviewInfo: {
            reviewStar: 24,
            reviewContent: '건우가 뭐임?',
            reviewLike: 76,
            webtoonLink: 'h',
          },
        },
      ]}
    />
  );
};

export default StorageInfoPage;
