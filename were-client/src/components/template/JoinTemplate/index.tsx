import JoinForm from '@/components/organism/JoinForm';
import React from 'react';
import { Handjet } from 'next/font/google';
import styles from './index.module.scss';

const handjet = Handjet({ weight: '700', subsets: ['latin'] });

const JoinTemplate = () => {
  return (
    <div className={styles.joinWrapper}>
      <div className={styles.logoWrapper}>
        <h1 className={handjet.className}>WeRe</h1>
      </div>
      <JoinForm />
    </div>
  );
};

export default JoinTemplate;
