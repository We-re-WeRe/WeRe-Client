import React from 'react';
import MyPageTopContents from '@/components/organism/MyPageTopContents';
import MyPageUnderContents from '@/components/organism/MyPageUnderContents';
import styles from './index.module.scss';

const MyPageTemplate = () => {
  return (
    <div className={styles.mypageWrapper}>
      <MyPageTopContents />
      <MyPageUnderContents />
    </div>
  );
};

export default MyPageTemplate;
