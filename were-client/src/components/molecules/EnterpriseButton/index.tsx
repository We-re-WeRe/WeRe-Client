'use client';

import ImageButton from '@/components/atoms/ImageButton';
import React, { useEffect, useState } from 'react';
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
  const [selectedEnterprise, setSelectedEnterprise] = useState<boolean[]>([]);

  useEffect(() => {
    setSelectedEnterprise(enterpriseList.map(_ => true));
  }, []);

  const selectEnterprise = (id: number) => {
    if (selectedEnterprise[id]) {
      selectedEnterprise[id] = false;
      setSelectedEnterprise([...selectedEnterprise]);
      return;
    }

    selectedEnterprise[id] = true;
    setSelectedEnterprise([...selectedEnterprise]);
  };

  return (
    <div className={clsx(styles.enterpriseButtonList)}>
      {enterpriseList.map(enterprise => (
        <ImageButton
          usage="filter"
          imgSrc={enterprise.image}
          key={enterprise.id}
          className={clsx({ [styles.selected]: selectedEnterprise[enterprise.id] })}
          onClick={() => {
            selectEnterprise(enterprise.id);
          }}
        />
      ))}
    </div>
  );
};

export default EnterpriseButton;
