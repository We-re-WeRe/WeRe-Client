import React from 'react';
import styles from './index.module.scss';

const Skeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div>
        <div className={styles.imgBox} />
        <div className={styles.infoBox}>
          <h2></h2>
          <div>
            <div className={styles.tag}></div>
            <div className={styles.tag}></div>
            <div className={styles.tag}></div>
          </div>
          <span></span>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
