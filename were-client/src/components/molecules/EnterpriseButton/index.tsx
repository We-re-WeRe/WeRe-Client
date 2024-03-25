import ImageButton from '@/components/atoms/ImageButton';
import React from 'react';
import naverLogo from '@/../public/images/naver-webtoon-logo.png';
import kakaoLogo from '@/../public/images/kakao-webtoon-logo.png';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import styles from './index.module.scss';

type TenterpriseList = { id: number; image: StaticImageData }[];
const enterpriseList: TenterpriseList = [
  {
    id: 0,
    image: kakaoLogo,
  },
  {
    id: 1,
    image: naverLogo,
  },
];

const EnterpriseButton = () => {
  return (
    <div className={clsx(styles.enterpriseButtonList)}>
      {enterpriseList.map(enterprise => (
        <ImageButton usage="filter" imgSrc={enterprise.image} key={enterprise.id} />
      ))}
    </div>
  );
};

export default EnterpriseButton;
