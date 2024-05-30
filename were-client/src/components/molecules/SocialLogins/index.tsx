import React from 'react';
import { SOCIAL_LOGIN_ICONS } from '../../../../public/assets';
import styles from './index.module.scss';

const SocialLogins = () => {
  return (
    <div className={styles.socialLogins}>
      <div className={styles.buttonsWrapper}>
        <button>
          <SOCIAL_LOGIN_ICONS.GMAIL width={40} height={40} />
        </button>
        <button>
          <SOCIAL_LOGIN_ICONS.NAVER width={50} height={50} />
        </button>
        <button>
          <SOCIAL_LOGIN_ICONS.KAKAO width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
