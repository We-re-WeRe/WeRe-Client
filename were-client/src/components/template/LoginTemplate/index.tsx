import React from 'react';
import LoginForm from '@/components/organism/LoginForm';
import SocialLogins from '@/components/molecules/SocialLogins';
import { Handjet } from 'next/font/google';
import styles from './index.module.scss';

const handjet = Handjet({ weight: '700', subsets: ['latin'] });

const LoginTemplate = () => {
  return (
    <div className={styles.templateWrapper}>
      <div className={styles.backgroundImage} />

      <div className={styles.loginTemplate}>
        <div className={styles.loginWrapper}>
          <div className={styles.logoWrapper}>
            <h1 className={handjet.className}>WeRe</h1>
          </div>
          <LoginForm />
          <div className={styles.divider} />
          <SocialLogins />
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
