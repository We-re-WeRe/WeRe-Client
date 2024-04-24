import TitleText from '@/components/atoms/TitleText';
import React from 'react';
import NormalText from '@/components/atoms/NormalText';
import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import TagList from '../TagList';
import styles from './index.module.scss';

interface Props {
  title: string;
  tags: string[];
  authors: string[];
  painters: string[];
  description: string;
}

const AUTHORS = ['임건우', '강성엽'];
const PAINTERS = ['채승규', '강성엽'];

const getDuplicatedAuthors = (authors: string[], painters: string[]) => {
  const duplicatedAuthors: string[] = [];

  authors.forEach(author => {
    if (painters.includes(author)) {
      duplicatedAuthors.push(author);
    }
  });

  return {
    duplicatedAuthors,
    dAuthors: authors.filter(author => !duplicatedAuthors.includes(author)),
    dPainters: painters.filter(painter => !duplicatedAuthors.includes(painter)),
  };
};

const WebtoonInfoDescription = () => {
  const { duplicatedAuthors, dAuthors, dPainters } = getDuplicatedAuthors(AUTHORS, PAINTERS);

  return (
    <div className={clsx(styles.webtoonInfoDescription)}>
      <TitleText size="large" color="white">
        김부장
      </TitleText>
      <TagList
        size="medium"
        type="storage"
        tags={[{ tagName: '먼치킨' }, { tagName: '아저씨' }, { tagName: '아빠복수극' }]}
      />
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
          전체 이용가
        </NormalText>
      </div>
      <NormalText
        color="white"
        bold
      >{`인류를 구하고 홀로 희생한 영웅, 최강의 초인 서문엽. 죽었다고 알려진 그가 17년 후의 평화로운 세상에 돌연 귀환하면서 초인들의 스포츠 <배틀필드>에는 지각변동이 일어나기 시작한다. 본격 현대 판타지 X 스포츠 X 액션!`}</NormalText>
    </div>
  );
};

export default WebtoonInfoDescription;
