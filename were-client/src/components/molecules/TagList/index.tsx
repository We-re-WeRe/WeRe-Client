'use client';

import WebtoonTag from '@/components/atoms/WebtoonTag';
import clsx from 'clsx';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface ITag {
  tagName: string;
  link?: string;
}

interface Props {
  size: 'small' | 'medium';
  tags: ITag[];
}

const TagList = ({ size, tags }: Props) => {
  const tagListRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const tagsRef: RefObject<null[] | HTMLDivElement[]> = useRef<null[] | HTMLDivElement[]>([]);
  const tagScrollPoints = useRef<number[]>([]);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isOver, setIsOver] = useState<boolean>(true);
  const [scrollState, setScrollState] = useState<string>('start');

  /**
   * useEffect
   * tagList의 overflow 판단하여 isOver 세팅
   * tagList에 scrollEvent 추가
   */
  useEffect(() => {
    const { current } = tagListRef;

    /**
     * tagList의 스크롤 위치를 판단하여 scrollState를 설정해준다.
     * @returns
     */
    const handleScroll = () => {
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

    /**
     * scroll Event Throttling
     */
    const throttleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          handleScroll();
          throttleTimeout.current = null;
        }, 100);
      }
    };

    if (current) {
      const hasOverFlow = current.clientWidth < current.scrollWidth;
      current.addEventListener('scroll', throttleScroll, { passive: true });
      setIsOver(hasOverFlow);

      return () => {
        current.removeEventListener('scroll', throttleScroll);
        if (throttleTimeout.current) {
          clearTimeout(throttleTimeout.current);
        }
      };
    }
    return () => {};
  }, [tagListRef]);

  /**
   * useEffect
   * 각 태그의 스크롤 시작 포인트를 tagScrollPoints에 저장
   */
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

  /**
   * TagList를 오른쪽으로 스크롤 해주는 함수
   * @param unit 스크롤 단위 (태그 수), 0 입력시 끝까지 스크롤
   * @returns
   */
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
          return;
        }
      }
    }
  };

  /**
   * TagList를 왼쪽으로 스크롤 해주는 함수
   * @param unit 스크롤 단위 (태그 수), 0 입력시 끝까지 스크롤
   * @returns
   */
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
        {tags.map((tag, idx) => (
          <WebtoonTag
            key={tag.tagName}
            tagName={tag.tagName}
            size={size}
            selected={idx === 0 && true}
            tagRef={ref => {
              tagsRef.current![idx] = ref;
            }}
          />
        ))}
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
