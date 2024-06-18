import React, { ReactNode } from 'react';
import styles from './layout.module.scss';

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className={styles.authBackgroundWrapper}>
      <div className={styles.backgroundImage} />

      <div className={styles.authContentsWrapper}>{children}</div>
    </div>
  );
};

export default AuthLayout;
