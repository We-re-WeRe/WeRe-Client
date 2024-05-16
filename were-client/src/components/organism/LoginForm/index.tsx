import React from 'react';
import TextButton from '@/components/atoms/TextButton';
import NormalText from '@/components/atoms/NormalText';
import styles from './index.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <div className={styles.formWrapper}>
        <div className={styles.idPwWrapper}>
          <div className={styles.inputWrapper}>
            <label htmlFor="login_id">아이디</label>
            <input className={styles.loginInput} id="login_id" placeholder="아이디를 입력해주세요." />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="login_pw">비밀번호</label>
            <input className={styles.loginInput} id="login_pw" placeholder="비밀번호를 입력해주세요." type="password" />
          </div>
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
