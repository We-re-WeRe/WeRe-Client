'use client';

import React, { RefObject, useRef, useState } from 'react';
import clsx from 'clsx';
import IconText from '@/components/molecules/IconText';
import IconButton from '@/components/atoms/IconButton';
import TitleText from '@/components/atoms/TitleText';
import NormalText from '@/components/atoms/NormalText';
import ProfileBox from '@/components/molecules/ProfileBox';
import { StaticImageData } from 'next/image';
import TextButton from '@/components/atoms/TextButton';
import LimitedInput from '@/components/molecules/LimitedInput';
import styles from './index.module.scss';

interface Props {
  image?: string | StaticImageData;
  nickname: string;
  follower: number;
  introduce: string;
  point: number;
}

const MyPageTopContents = ({ image, nickname, follower, introduce, point }: Props) => {
  const [editCheck, setEditCheck] = useState<boolean>(false);

  const MyPageNicknameRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const MyPageIntroduceRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  const handleModify = () => {
    if (MyPageNicknameRef.current && MyPageIntroduceRef.current) {
      const { value: nicknameValue } = MyPageNicknameRef.current;
      const { value: introduceValue } = MyPageIntroduceRef.current;

      setEditCheck(!editCheck);
    }
  };

  return (
    <div className={clsx(styles.overall)}>
      <div className={clsx(styles.profileSection)}>
        <ProfileBox imgSrc={image} edit />
      </div>
      {!editCheck ? (
        <div className={clsx(styles.textSection)}>
          <div className={clsx(styles.topSection)}>
            <TitleText size="large">{nickname}</TitleText>
            <IconButton
              size={24}
              type="edit"
              onClick={() => {
                setEditCheck(!editCheck);
              }}
            />
          </div>
          <div className={clsx(styles.followerSection)}>
            <IconText type="follower" text={follower} size="sm" />
          </div>
          <div className={clsx(styles.introSection)}>{introduce}</div>
        </div>
      ) : (
        <div className={clsx(styles.textSection)}>
          <div className={clsx(styles.topSection)}>
            <div className={clsx(styles.mypageModify, styles.nicknameModify)}>
              <LimitedInput maxLength={12} className="titleInput" initialValue={nickname} ref={MyPageNicknameRef} />
            </div>
            <div className={clsx(styles.buttonWrapper)}>
              <div className={clsx(styles.buttonArea)}>
                <TextButton size="small" design="primary" onClick={handleModify}>
                  수정
                </TextButton>
                <TextButton
                  size="small"
                  design="inverse"
                  onClick={() => {
                    setEditCheck(!editCheck);
                  }}
                >
                  취소
                </TextButton>
              </div>
            </div>
          </div>
          <div className={clsx(styles.followerSection)}>
            <IconText type="follower" text={follower} size="sm" />
          </div>
          <div className={clsx(styles.mypageModify, styles.introduceModify)}>
            <LimitedInput maxLength={50} className="titleInput" initialValue={introduce} ref={MyPageIntroduceRef} />
          </div>
        </div>
      )}
      <div className={clsx(styles.pointSection)}>
        <NormalText size="lg" bold>
          포인트
        </NormalText>
        <div className={clsx(styles.pointValue)}>
          <TitleText size="medium">{point}wc</TitleText>
        </div>
      </div>
    </div>
  );
};

export default MyPageTopContents;
