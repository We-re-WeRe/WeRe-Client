import React from 'react';
import CollectionCategory from '@/components/molecules/CollectionCategory';
import StorageBox from '@/components/molecules/StorageBox';
import WebtoonBox from '@/components/molecules/WebtoonBox';
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

interface Props {
  storages?: IStorage[];
  webtoons?: IWebtoon[];
  name: string;
  link: string;
}

const CollectionContent = ({ storages, webtoons, name, link }: Props) => {
  return (
    <div className={styles.collectionContent}>
      <div className={styles.collectionCategory}>
        <CollectionCategory name={name} link={link} />
      </div>
      <div className={styles.collectionItems}>
        {storages &&
          storages.map(storage => (
            <div key={storage.userId} className={styles.collectionItem}>
              <StorageBox
                image={storage.image}
                title={storage.title}
                author={storage.author}
                like={storage.like}
                link={storage.link}
                userId={storage.userId}
              />
            </div>
          ))}
        {webtoons &&
          webtoons.map(webtoon => (
            <div key={webtoon.link} className={styles.collectionItem}>
              <WebtoonBox
                imageUrl={webtoon.imageUrl}
                title={webtoon.title}
                author={webtoon.author}
                link={webtoon.link}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CollectionContent;
