import React from 'react';
import styles from './index.module.scss';
import TitleText from '@/components/atoms/TitleText';
import Spinner from '@/components/atoms/Spinner';
const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <TitleText size="medium" color="white">
        리뷰
      </TitleText>
      <Spinner width={24} height={24} />
    </div>
  );
};

export default Skeleton;
