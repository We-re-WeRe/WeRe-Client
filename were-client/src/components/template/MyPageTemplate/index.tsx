import React from 'react';
import MyPageTopContents from '@/components/organism/MyPageTopContents';
import MyPageUnderContents from '@/components/organism/MyPageUnderContents';
import { StaticImageData } from 'next/image';
import styles from './index.module.scss';

interface IStorage {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}
interface ITag {
  tagName: string;
  link?: string;
}

interface IReview {
  thumbnailImage?: string;
  profileImage?: string;
  title?: string;
  nickname?: string;
  userID?: string;
  webtoonID?: string;
  date: string;
  starRate: number;
  review: string;
  reviewTags: ITag[];
  likes: number;
}

interface IWebtoon {
  title: string;
  author: string;
  stars: number;
  reviews: number;
  imageUrl: string;
  link: string;
}

interface IProfile {
  image: string;
  name: string;
  follower: number;
  link: string;
}

interface Props {
  image?: string | StaticImageData;
  nickname: string;
  follower: number;
  introduce: string;
  point: number;
  storages?: IStorage[];
  reviews?: IReview[];
  likeWebtoons?: IWebtoon[];
  followings?: IProfile[];
}

const MyPageTemplate = ({
  image,
  nickname,
  follower,
  introduce,
  point,
  storages,
  reviews,
  likeWebtoons,
  followings,
}: Props) => {
  return (
    <div className={styles.mypageWrapper}>
      <MyPageTopContents image={image} nickname={nickname} follower={follower} introduce={introduce} point={point} />
      <MyPageUnderContents storages={storages} reviews={reviews} likeWebtoons={likeWebtoons} followings={followings} />
    </div>
  );
};

export default MyPageTemplate;
