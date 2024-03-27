'use client';

import WebtoonTag from '@/components/atoms/WebtoonTag';
import clsx from 'clsx';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { LeftScrollButton, RightScrollButton } from './ScrollButton';

interface ITag {
  tagName: string;
  link?: string;
}

interface Props {
  size: 'small' | 'medium';
  tags: ITag[];
}

const ScrollTagList = ({ size, tags }: Props) => {
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

  return (
    <>
      {/* Left Scroll Button */}
      <div className={clsx(styles.tagBox)}>
        {scrollState !== 'start' && <LeftScrollButton tagListRef={tagListRef} tagScrollPoints={tagScrollPoints} />}
        {/* TagList */}
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
        {/* Right Scroll Button */}
        {isOver && scrollState !== 'end' && (
          <RightScrollButton tagListRef={tagListRef} tagScrollPoints={tagScrollPoints} />
        )}
      </div>
    </>
  );
};

export default ScrollTagList;
