import UserpageInfo from '@/components/organism/UserpageInfo';
import UserpageUnderContents from '@/components/organism/UserpageUnderContents';
import React from 'react';
import styles from './index.module.scss';

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

interface IStorage {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

interface Props {
  image?: string;
  nickname: string;
  follower: number;
  introduce: string;
  reviews: IReview[];
  storages: IStorage[];
}

const UserPageTemplate = ({ image, nickname, follower, introduce, reviews, storages }: Props) => {
  return (
    <div className={styles.userpageWrapper}>
      <UserpageInfo image={image} nickname={nickname} follower={follower} introduce={introduce} />
      <UserpageUnderContents reviews={reviews} storages={storages} />
    </div>
  );
};

export default UserPageTemplate;
