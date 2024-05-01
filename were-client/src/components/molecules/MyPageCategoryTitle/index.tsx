import React from 'react';
import clsx from 'clsx';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';

interface ITapState {
  category: string;
  selected: boolean;
}

interface Props {
  tapStates: ITapState[];
  link: string;
  onClickTitle: (index: number) => void;
}

const MyPageCategoryTitle = ({ tapStates, link, onClickTitle }: Props) => {
  return (
    <div className={clsx(styles.commonCategoryTitle)}>
      <div className={clsx(styles.title)}>
        {tapStates.map((tapState, index) => (
          <div key={tapState.category} className={clsx(styles.tapTitle)}>
            <TextButton
              size={tapStates[index].selected ? 'large' : 'small'}
              bold={tapStates[index].selected}
              link={link}
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
