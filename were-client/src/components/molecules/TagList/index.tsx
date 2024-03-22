'use client';

import WebtoonTag from '@/components/atoms/WebtoonTag';
import clsx from 'clsx';
import React, { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface Props {
  size: 'small' | 'medium';
}

const TagList = () => {
  const tagListRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const tagsRef: RefObject<null[] | HTMLDivElement[]> = useRef<null[] | HTMLDivElement[]>([]);
  const tagScrollPoints = useRef<number[]>([]);
  const [isOver, setIsOver] = useState<boolean>(true);
  const [scrollState, setScrollState] = useState<string>('start');

  const handleScroll = (current: HTMLDivElement) => {
    if (current) {
      if (current.scrollLeft === 0) {
        setScrollState('start');
        return;
      }

      if (current.scrollLeft >= current.scrollWidth - current.clientWidth) {
        setScrollState('end');
        return;
      }

      setScrollState('else');
    }
  };

  // tag가 많아서 OverFlow난 경우 체크
  // Scroll 이벤트리스너 등록 / 삭제
  useLayoutEffect(() => {
    const { current } = tagListRef;
    if (current) {
      const scrollFunc: () => void = () => handleScroll(current);
      const hasOverFlow = current.clientWidth < current.scrollWidth;
      current.addEventListener('scroll', scrollFunc);
      setIsOver(hasOverFlow);

      return () => {
        current.removeEventListener('scroll', scrollFunc);
      };
    }
    return () => {};
  }, [tagListRef]);

  // 각 태그의 스크롤 startPoint 설정
  useEffect(() => {
    const { current } = tagsRef;
    if (current) {
      let startPoint = 0;
      const scrollPoints = [];
      for (let i = 0; i < current.length; i += 1) {
        scrollPoints.push(startPoint);
        startPoint += current[i]!.offsetWidth + 2;
      }
      scrollPoints.push(startPoint);

      tagScrollPoints.current = scrollPoints;
    }
  }, [tagsRef]);

  const moveRight = (unit: number) => {
    if (tagListRef.current !== null && tagsRef.current !== null) {
      const { current } = tagScrollPoints;
      const { scrollLeft } = tagListRef.current;

      if (unit === 0) {
        tagListRef.current.scrollLeft = current[current.length - 1];
        return;
      }

      for (let i = 0; i < current.length; i += unit) {
        if (scrollLeft < current[i]) {
          tagListRef.current.scrollLeft = current[i];
          console.log(tagListRef.current.scrollLeft, current[i]);
          return;
        }
      }
    }
  };

  const moveLeft = (unit: number) => {
    if (tagListRef.current !== null && tagsRef.current !== null) {
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
    <div className={clsx(styles.tagBox)}>
      {scrollState !== 'start' && (
        <div className={clsx(styles.overflow, styles.left)}>
          <div onClick={() => moveLeft(0)} role="presentation">
            {'<<'}
          </div>
          <div onClick={() => moveLeft(1)} role="presentation">
            {'<'}
          </div>
          <div className={clsx(styles.shader, styles.left)} />
        </div>
      )}
      <div className={clsx(styles.tagList)} ref={tagListRef}>
        <WebtoonTag
          size="small"
          tagName="로맨스"
          tagRef={ref => {
            tagsRef.current![0] = ref;
          }}
        />
        <WebtoonTag
          size="small"
          tagName="판타지"
          tagRef={ref => {
            tagsRef.current![1] = ref;
          }}
        />
        <WebtoonTag
          size="small"
          tagName="여캐가이쁜"
          tagRef={ref => {
            tagsRef.current![2] = ref;
          }}
        />
        <WebtoonTag
          size="small"
          tagName="무협"
          tagRef={ref => {
            tagsRef.current![3] = ref;
          }}
        />
        <WebtoonTag
          size="small"
          tagName="주인공이잘생긴"
          tagRef={ref => {
            tagsRef.current![4] = ref;
          }}
        />
        <WebtoonTag
          size="small"
          tagName="학교일진물"
          tagRef={ref => {
            tagsRef.current![5] = ref;
          }}
        />
        <WebtoonTag
          size="small"
          tagName="복수극"
          tagRef={ref => {
            tagsRef.current![6] = ref;
          }}
        />
      </div>
      {isOver && scrollState !== 'end' && (
        <div className={clsx(styles.overflow, styles.right)}>
          <div className={clsx(styles.shader, styles.right)} />
          <div onClick={() => moveRight(1)} role="presentation">
            {'>'}
          </div>
          <div onClick={() => moveRight(0)} role="presentation">
            {'>>'}
          </div>
        </div>
      )}
    </div>
  );
};

export default TagList;
