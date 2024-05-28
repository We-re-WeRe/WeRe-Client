import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';

interface ITapState {
  category: string;
  selected: boolean;
}

interface Props {
  tapStates: ITapState[];
  onClickTitle: (index: number) => void;
}

const MyPageCategoryTitle = ({ tapStates, onClickTitle }: Props) => {
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  const [transSide, setTransSide] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !transSide) {
        setTransSide(true);
        return;
      }
      if (window.scrollY < 350 && transSide) {
        setTransSide(false);
      }
    };

    const throttleScroll = () => {
      if (!throttleTimeout.current) {
        throttleTimeout.current = setTimeout(() => {
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
    <div className={clsx(styles.commonCategoryTitle)}>
      <div className={clsx(styles.title, { [styles.scrollTitle]: transSide })}>
        {tapStates.map((tapState, index) => (
          <div key={tapState.category} className={clsx(styles.tapTitle)}>
            <TextButton
              size={tapStates[index].selected ? 'large' : 'small'}
              bold={tapStates[index].selected}
              onClick={() => onClickTitle(index)}
            >
              {tapState.category}
            </TextButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPageCategoryTitle;
