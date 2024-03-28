import clsx from 'clsx';
import React, { RefObject } from 'react';
import styles from './index.module.scss';

interface buttonProps {
  tagListRef: RefObject<HTMLDivElement>;
  tagScrollPoints: React.MutableRefObject<number[]>;
}

interface Props extends buttonProps {
  type: 'left' | 'right';
}

const LeftScrollButton = ({ tagListRef, tagScrollPoints }: buttonProps) => {
  /**
   * TagList를 왼쪽으로 스크롤 해주는 함수
   * @param unit 스크롤 단위 (태그 수), 0 입력시 끝까지 스크롤
   * @returns
   */
  /* eslint-disable no-param-reassign */
  const moveLeft = (unit: number) => {
    if (tagListRef.current !== null) {
      const { current } = tagScrollPoints;
      const { scrollLeft } = tagListRef.current;
      if (unit === 0) {
        const startPoint = current[0];
        tagListRef.current.scrollLeft = startPoint;
        return;
      }
      for (let i = 0; i < current.length - 1; i += unit) {
        if (scrollLeft <= current[i]) {
          tagListRef.current.scrollLeft = current[i - 1];
          return;
        }
      }
    }
  };
  return (
    <div className={clsx(styles.overflow, styles.left)}>
      <div onClick={() => moveLeft(0)} role="presentation">
        {'<<'}
      </div>
      <div onClick={() => moveLeft(1)} role="presentation">
        {'<'}
      </div>
      <div className={clsx(styles.shader, styles.left)} />
    </div>
  );
};

const RightScrollButton = ({ tagListRef, tagScrollPoints }: buttonProps) => {
  /**
   * TagList를 오른쪽으로 스크롤 해주는 함수
   * @param unit 스크롤 단위 (태그 수), 0 입력시 끝까지 스크롤
   * @returns
   */
  /* eslint-disable no-param-reassign */
  const moveRight = (unit: number) => {
    if (tagListRef.current !== null) {
      const { current } = tagScrollPoints;
      const { scrollLeft } = tagListRef.current;

      if (unit === 0) {
        tagListRef.current.scrollLeft = current[current.length - 1];
        return;
      }

      for (let i = 0; i < current.length; i += unit) {
        if (scrollLeft < current[i]) {
          tagListRef.current.scrollLeft = current[i];
          return;
        }
      }
    }
  };

  return (
    <div className={clsx(styles.overflow, styles.right)}>
      <div className={clsx(styles.shader, styles.right)} />
      <div onClick={() => moveRight(1)} role="presentation">
        {'>'}
      </div>
      <div onClick={() => moveRight(0)} role="presentation">
        {'>>'}
      </div>
    </div>
  );
};

const ScrollButton = ({ tagListRef, tagScrollPoints, type }: Props) => {
  if (type === 'left') {
    return <LeftScrollButton tagListRef={tagListRef} tagScrollPoints={tagScrollPoints} />;
  }
  return <RightScrollButton tagListRef={tagListRef} tagScrollPoints={tagScrollPoints} />;
};

export default ScrollButton;
