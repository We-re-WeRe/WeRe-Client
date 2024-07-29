import React from 'react';
import styles from './index.module.scss';

const Spinner = ({ width = 50, height = 50 }: { width?: number; height?: number }) => {
  return (
    <div>
      <div className={styles.spinner} style={{ width: `${width}px`, height: `${height}px` }}></div>
    </div>
  );
};

export default Spinner;
