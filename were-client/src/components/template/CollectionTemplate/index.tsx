import React from 'react';
import CollectionContent from '@/components/organism/CollectionContent';
import styles from './index.module.scss';

interface IStorage {
  image: string;
  title: string;
  author: string;
  like: number;
  link: string;
  userId: string;
}

interface IWebtoon {
  title: string;
  author: string;
  stars: number;
  reviews: number;
  imageUrl: string;
  link: string;
}

interface ICollection {
  storages?: IStorage[];
  webtoons?: IWebtoon[];
  name: string;
  link: string;
}

interface Props {
  collections: ICollection[];
}

const CollectionTemplate = ({ collections }: Props) => {
  return (
    <div className={styles.collectionWrapper}>
      {collections.map(collection => (
        <CollectionContent
          key={collection.link}
          name={collection.name}
          link={collection.link}
          storages={collection.storages}
          webtoons={collection.webtoons}
        />
      ))}
    </div>
  );
};

export default CollectionTemplate;
