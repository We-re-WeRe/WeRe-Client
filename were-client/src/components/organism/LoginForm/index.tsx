'use client';

import React from 'react';
import TextButton from '@/components/atoms/TextButton';
import NormalText from '@/components/atoms/NormalText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput, PasswordInput } from '@/components/molecules/FormInput';
import { loginApi } from '@/service/auth';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';
import { getUserProfile } from '@/service/user';
import useUserState from '@/hooks/useUserState';

interface LoginSchema {
  id: string;
  pw: string;
}

const LoginForm = () => {
  const { handleSubmit, control } = useForm<LoginSchema>({
    defaultValues: {
      id: '',
      pw: '',
    },
  });
  const { setUser } = useUserState();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchema> = async data => {
    loginApi({ account: data.id, password: data.pw })
      .then(async () => {
        const user = await getUserProfile();
        setUser(user);
        router.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        <div className={styles.idPwWrapper}>
          <FormInput
            labelText="아이디"
            name="id"
            inputAttr={{ id: 'login_id', placeholder: '아이디를 입력해주세요.' }}
            control={control}
          />
          <PasswordInput
            labelText="비밀번호"
            name="pw"
            inputAttr={{ id: 'login_password', placeholder: '비밀번호를 입력해주세요.' }}
            control={control}
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
