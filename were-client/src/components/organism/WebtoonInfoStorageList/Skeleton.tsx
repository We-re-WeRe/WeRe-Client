import React from 'react';
import styles from './index.module.scss';
import TitleText from '@/components/atoms/TitleText';
import Spinner from '@/components/atoms/Spinner';
const Skeleton = () => {
  return (
    <div className={styles.webtoonInfoStorageList}>
      <div className={`${styles.header} ${styles.skeleton}`}>
        <TitleText size="medium" color="white">
          해당 웹툰이 들어간 보관함
        </TitleText>
        <Spinner width={24} height={24} />
      </div>
    </div>
  );
};

export default Skeleton;
