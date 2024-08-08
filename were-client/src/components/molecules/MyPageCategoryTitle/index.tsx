import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';

const CATEGORY_LIST = [
  {
    tabIndex: 0,
    category: '보관함',
  },
  {
    tabIndex: 1,
    category: '리뷰',
  },
  {
    tabIndex: 2,
    category: '좋아요',
  },
];

interface Props {
  tabIdx: number;
  setTabIdx: React.Dispatch<React.SetStateAction<number>>;
}

const MyPageCategoryTitle = ({ tabIdx, setTabIdx }: Props) => {
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const [transSide, setTransSide] = useState<boolean>(false);
  const floatingMenu = useRef<HTMLDivElement | null>(null);
  /**
   * 스크롤 시 탭 카테고리가 사이드로 옮겨짐
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !transSide) {
        setTransSide(true);
        return;
      }
      if (window.scrollY <= 400 && transSide) {
        setTransSide(false);
      }
    };

    const moveFloatingMenu = () => {
      if (transSide && floatingMenu.current) {
        floatingMenu.current.style.transform = `translateY(calc(${window.scrollY + window.innerHeight / 2}px - 50%))`;
        return;
      }
      if (floatingMenu.current) {
        floatingMenu.current.style.transform = `translateY(0px)`;
        return;
      }
    };

    const throttleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
          moveFloatingMenu();
          handleScroll();
          throttleTimeout.current = null;
        }, 50);
      }
    };

    window.addEventListener('scroll', throttleScroll);
    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, [transSide]);

  return (
    <div className={styles.commonCategoryTitle}>
      <div className={clsx({ [styles.title]: !transSide }, { [styles.scrollTitle]: transSide })} ref={floatingMenu}>
        {CATEGORY_LIST.map(category => (
          <div key={category.tabIndex} className={styles.tabTitle}>
            <TextButton
              size={tabIdx === category.tabIndex ? 'large' : 'medium'}
              bold={tabIdx === category.tabIndex}
              onClick={() => setTabIdx(category.tabIndex)}
            >
              {category.category}
            </TextButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPageCategoryTitle;
