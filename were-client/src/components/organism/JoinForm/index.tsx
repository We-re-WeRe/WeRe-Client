import { LabeledInput, RadioInput } from '@/components/molecules/FormInput';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';

type GenderType = 'male' | 'female';
interface IForm {
  id: string;
  pw: string;
  pwCheck: string;
  realName: string;
  sex: GenderType;
  birthDate: string;
  nickname: string;
}

const JoinForm = () => {
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      id: '',
      pw: '',
      pwCheck: '',
      realName: '',
      sex: 'male',
      birthDate: '',
      nickname: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data.sex, data.nickname);
  };
  return (
    <div className={styles.formWrapper}>
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
          />
          <LabeledInput
            type="none"
            labelText="이름"
            name="realName"
            control={control}
            inputAttr={{ id: 'join_name' }}
          />
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
              name="birthDate"
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
