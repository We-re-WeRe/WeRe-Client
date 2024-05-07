'use client';

import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import ProfileButton from '@/components/atoms/ProfileButton';
import clickProfile from '@/../public/images/hover-profile.png';
import defaultProfile from '@/../public/images/default-profile.png';
import { read } from 'fs';
import { headers } from 'next/headers';
import styles from './index.module.scss';

interface Props {
  imgSrc?: string | StaticImageData;
  edit: boolean; // 마이페이지 프로필 -> true, 유저페이지 프로필 -> false
}

const ProfileBox = ({ imgSrc, edit }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | StaticImageData | undefined>(imgSrc);
  const fileInput = useRef(null);

  if (!edit) {
    // 유저페이지 프로필
    return (
      <div className={clsx(styles.profileBox)}>
        <Image src={imgSrc ?? defaultProfile} alt="profile" width={202} height={202} style={{ borderRadius: '50%' }} />
      </div>
    );
  }

  /** 파일 업로드 */
  const onClickUpload = async (event: any) => {
    const file = event.target.files[0]; // 이미지 단 1개만 받음
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    // read.onLoad = (e: any) => {
    //   if (reader.readyState === 2) {
    //     setProfileImage(e.target.result);
    //   }
    // };

    // const formData = new FormData();
    // formData.append('image', file);

    // try {
    //   const imageRes = await.('').post('/image', formData, {
    //     headers: {"Content-type": "multipart/form-data"}
    //   })
    // } catch (error: any) {
    //   console.error(error.response)
    // }
  };

  /** 마우스 오버 */
  const onMouseOverProfile = () => {
    setIsHover(true);
  };
  /** 마우스 리브 */
  const onMouseLeaveProfile = () => {
    setIsHover(false);
  };

  return (
    // 마이페이지 프로필
    <div
      className={clsx(styles.profileBox)}
      onMouseOver={onMouseOverProfile}
      onFocus={onMouseOverProfile}
      onMouseLeave={onMouseLeaveProfile}
    >
      <div className={clsx(styles.profile)}>
        {isHover && (
          <div className={clsx(styles.hoverProfile)}>
            <Image src={clickProfile} alt="" width={202} height={202} />
          </div>
        )}
        <ProfileButton usage="mypage" imgSrc={imgSrc} onClick={() => onClickUpload} />
      </div>
    </div>
  );
};

export default ProfileBox;
