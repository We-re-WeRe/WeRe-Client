'use client';

import React from 'react';
import TextButton from '@/components/atoms/TextButton';
import NormalText from '@/components/atoms/NormalText';
import LoginInput from '@/components/atoms/LoginInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';

interface LoginSchema {
  id: string;
  pw: string;
}

const LoginForm = () => {
  const { handleSubmit, register } = useForm<LoginSchema>();

  const onSubmit: SubmitHandler<LoginSchema> = data => {
    console.log(data.id, data.pw);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        <div className={styles.idPwWrapper}>
          <LoginInput {...register('id')} id="login_id" labelText="아이디" placeholder="아이디를 입력해주세요." />
          <LoginInput
            {...register('pw')}
            id="login_password"
            labelText="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
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
        <button className={styles.loginButton} type="submit">
          <NormalText>Login</NormalText>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
