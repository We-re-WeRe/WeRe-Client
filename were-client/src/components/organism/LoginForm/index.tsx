import React from 'react';
import TextButton from '@/components/atoms/TextButton';
import NormalText from '@/components/atoms/NormalText';
import LoginInput from '@/components/atoms/LoginInput';
import styles from './index.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <div className={styles.formWrapper}>
        <div className={styles.idPwWrapper}>
          <LoginInput id="login_id" labelText="아이디" placeholder="아이디를 입력해주세요." />
          <LoginInput id="login_password" labelText="비밀번호" placeholder="비밀번호를 입력해주세요" type="password" />
        </div>
        <div className={styles.validWrapper}>
          <NormalText size="xs">Error</NormalText>
        </div>
        <div className={styles.findWrapper}>
          <TextButton size="small" link="join">
            아이디/비밀번호 찾기
          </TextButton>
          <TextButton size="small" link="join">
            회원가입
          </TextButton>
        </div>
      </div>
      <div className={styles.loginButtonWrapper}>
        <button className={styles.loginButton}>
          <NormalText>Login</NormalText>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
