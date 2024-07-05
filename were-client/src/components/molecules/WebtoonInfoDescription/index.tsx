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

const WebtoonInfoDescription = () => {
  const { duplicatedAuthors, dAuthors, dPainters } = { duplicatedAuthors: [], dAuthors: [], dPainters: [] };

  return (
    <div className={clsx(styles.webtoonInfoDescription)}>
      <TitleText size="large" color="white">
        김부장
      </TitleText>
      <TagList size="medium" type="storage" tags={[]} />
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
      <NormalText color="white" description>
        평생 욕심없이 살아온 소심한 윤리교사 전햇살, 그녀의 옆집에 욕망과 쾌락의 신이 이사왔다. 섹시한 외모에 치명적인
        향기를 내뿜는 그의 이름은 ‘디오니소스’, 줄여서 디오. 디오가 신계 와인을 제조할 때 꼭 들어가야 하는 재료는 인간의
        평생 이루지 못한 짙은 욕망이다. 그걸 가진 건 바로 햇살! 바라는 거라곤 그저 반복되는 평온한 일상 뿐, 여타 다른
        꿈이나 욕망이라곤 1도 없이 살아온 햇살인데… 디오는 햇살의 깊은 곳의 욕망을 깨워내기 위해 신의 능력까지
        사용해가며 그녀를 쉴새없이 귀찮게 굴기 시작한다.
      </NormalText>
    </div>
  );
};

export default WebtoonInfoDescription;
