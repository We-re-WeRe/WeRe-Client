import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './index.module.scss';
import IconText from '../IconText';
import useUserState from '@/hooks/useUserState';
import { logoutApi } from '@/service/auth';

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupBox = React.forwardRef<HTMLDivElement, Props>(({ isShow, setIsShow }, ref) => {
  const { clearUser } = useUserState();

  const logoutHandler = async () => {
    await logoutApi()
      .then(() => {
        clearUser();
        setIsShow(false);
      })
      .catch(err => console.log(err));
  };

  return (
    isShow && (
      <div className={clsx(styles.popupWrapper)} ref={ref}>
        <Link
          href="/my"
          className={clsx(styles.popupItem)}
          onClick={() => {
            setIsShow(false);
          }}
        >
          <IconText type="user" text="마이프로필" size="sm" />
        </Link>
        <div className={clsx(styles.popupItem)} onClick={logoutHandler} role="presentation">
          <IconText type="logout" text="로그아웃" size="sm" />
        </div>
      </div>
    )
  );
});

export default PopupBox;
