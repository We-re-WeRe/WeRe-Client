import { LabeledInput, RadioInput } from '@/components/molecules/FormInput';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpApi } from '@/service/auth';
import styles from './index.module.scss';

type GenderType = 'male' | 'female';
interface IForm {
  id: string;
  pw: string;
  pwCheck: string;
  name: string;
  sex: GenderType;
  birth: string;
  nickname: string;
}

const JoinForm = () => {
  const { control, handleSubmit, watch } = useForm<IForm>({
    defaultValues: {
      id: '',
      pw: '',
      pwCheck: '',
      name: '',
      sex: 'male',
      birth: '',
      nickname: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IForm> = data => {
    const user = {
      nickname: data.nickname,
      sex: data.sex,
      birth: new Date(data.birth),
      name: data.name,
    };
    signUpApi({ account: data.id, password: data.pw, user });
  };
  return (
    <div
      role="presentation"
      className={styles.formWrapper}
      onMouseDown={() => {
        console.log(document.cookie);
      }}
    >
      <form className={styles.formBox}>
        <div className={styles.inputsWrapper}>
          <LabeledInput
            labelText="아이디"
            name="id"
            control={control}
            rules={{ required: 'hey' }}
            type="dupcheck"
            inputAttr={{ id: 'join_id' }}
          />
          <LabeledInput
            type="password"
            labelText="비밀번호"
            name="pw"
            control={control}
            inputAttr={{ id: 'join_pw' }}
          />
          <LabeledInput
            type="password"
            labelText="비밀번호 확인"
            name="pwCheck"
            control={control}
            inputAttr={{ id: 'join_pw_check' }}
            rules={{
              validate: value => value === watch('pw') || '비밀번호가 일치하지 않습니다.',
            }}
          />
          <LabeledInput type="none" labelText="이름" name="name" control={control} inputAttr={{ id: 'join_name' }} />
          <div className={styles.formRow}>
            <RadioInput
              labelText="성별"
              control={control}
              name="sex"
              radioItem={{ male: '♂ 남자', female: '♀ 여자' }}
            />
            <LabeledInput
              type="none"
              labelText="생일"
              control={control}
              name="birth"
              inputAttr={{ id: 'join_birthdate' }}
            />
          </div>
          <LabeledInput
            labelText="닉네임"
            name="nickname"
            control={control}
            type="dupcheck"
            inputAttr={{ id: 'join_nickname' }}
          />
        </div>
        <div className={styles.joinButtonWrapper}>
          <div className={styles.joinButton} role="presentation" onClick={handleSubmit(onSubmit)}>
            가입하기
          </div>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;
