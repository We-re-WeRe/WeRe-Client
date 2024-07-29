import TitleText from '@/components/atoms/TitleText';
import React from 'react';
import NormalText from '@/components/atoms/NormalText';
import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import TagList from '../TagList';
import styles from './index.module.scss';
import { getDuplicatedAuthors } from '@/util/author';
import { ITag } from '@/types/tag';

interface Props {
  title: string;
  tags: ITag[];
  authors: string[];
  painters: string[];
  description: string;
  genre: string;
}

const WebtoonInfoDescription = ({ title, tags, authors, painters, description, genre }: Props) => {
  const { duplicatedAuthors, dAuthors, dPainters } = getDuplicatedAuthors(authors, painters);

  return (
    <div className={clsx(styles.webtoonInfoDescription)}>
      <TitleText size="large" color="white">
        {title}
      </TitleText>
      <TagList size="medium" type="storage" tags={tags} />
      <div className={clsx(styles.authorSection)}>
        {/** 글/그림 */}
        {duplicatedAuthors.length > 0 && (
          <span className={clsx(styles.classifyAuthors)}>
            {duplicatedAuthors.map((author, idx) => (
              <span key={author}>
                <TextButton link={author} size="medium">
                  {author}
                </TextButton>
                {idx < duplicatedAuthors.length - 1 ? ',\u00A0' : ' 글/그림'}
              </span>
            ))}
          </span>
        )}

        {/** 글 */}
        {dAuthors.length > 0 && (
          <span className={clsx(styles.classifyAuthors)}>
            {dAuthors.map((author, idx) => (
              <span key={author}>
                <TextButton link={author} size="medium">
                  {author}
                </TextButton>
                {idx < dAuthors.length - 1 ? ',\u00A0' : ' 글'}
              </span>
            ))}
          </span>
        )}

        {/** 작가 */}
        {dPainters.length > 0 && (
          <span className={clsx(styles.classifyAuthors)}>
            {dPainters.map((painter, idx) => (
              <span key={painter}>
                <TextButton link={painter} size="medium">
                  {painter}
                </TextButton>
                {idx < dPainters.length - 1 ? ',\u00A0' : ' 그림'}
              </span>
            ))}
          </span>
        )}

        <NormalText color="white" bold>
          {genre}
        </NormalText>
      </div>
      <NormalText color="white" description>
        {description}
      </NormalText>
    </div>
  );
};

export default WebtoonInfoDescription;
