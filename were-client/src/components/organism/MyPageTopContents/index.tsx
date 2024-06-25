'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import IconText from '@/components/molecules/IconText';
import IconButton from '@/components/atoms/IconButton';
import TitleText from '@/components/atoms/TitleText';
import NormalText from '@/components/atoms/NormalText';
import ProfileBox from '@/components/molecules/ProfileBox';
import TextButton from '@/components/atoms/TextButton';
import LimitedInput from '@/components/molecules/LimitedInput';
import { getUserDetailMyPage, patchUser } from '@/service/user';
import { getPointsSum } from '@/service/point';
import { IUser } from '@/types/user';
import { IPointSum } from '@/types/point';
import styles from './index.module.scss';

const MyPageTopContents = () => {
  const [editCheck, setEditCheck] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    id: 0,
    imageURL: '',
    nickname: 'string',
    introduceMe: 'string',
    totalFollowers: 0,
    isMine: true,
    isFollowing: true,
  });
  const [point, setPoint] = useState<IPointSum>();
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserDetailMyPage();
      const pointData = await getPointsSum();
      setUser(userData);
      setPoint(pointData);
    };
    fetchData();
  }, [user, point]);

  const MyPageNicknameRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const MyPageIntroduceRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  const handleModify = async () => {
    if (MyPageNicknameRef.current && MyPageIntroduceRef.current) {
      const { value: nicknameValue } = MyPageNicknameRef.current;
      const { value: introduceValue } = MyPageIntroduceRef.current;
      await patchUser(nicknameValue, introduceValue);
      setEditCheck(!editCheck);
    }
  };

  return (
    <div className={clsx(styles.overall)}>
      <div className={clsx(styles.profileSection)}>
        <ProfileBox imgSrc={user.imageURL} edit />
      </div>
      {!editCheck ? (
        <div className={clsx(styles.textSection)}>
          <div className={clsx(styles.topSection)}>
            <TitleText size="large">{user.nickname}</TitleText>
            <IconButton
              size={24}
              type="edit"
              onClick={() => {
                setEditCheck(!editCheck);
              }}
            />
          </div>
          <div className={clsx(styles.followerSection)}>
            <IconText type="follower" text={user.totalFollowers} size="sm" />
          </div>
          <div className={clsx(styles.introSection)}>{user.introduceMe}</div>
        </div>
      ) : (
        <div className={clsx(styles.textSection)}>
          <div className={clsx(styles.topSection)}>
            <div className={clsx(styles.mypageModify, styles.nicknameModify)}>
              <LimitedInput
                maxLength={12}
                className="titleInput"
                initialValue={user.nickname}
                ref={MyPageNicknameRef}
              />
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
            <IconText type="follower" text={user.totalFollowers} size="sm" />
          </div>
          <div className={clsx(styles.mypageModify, styles.introduceModify)}>
            <LimitedInput
              maxLength={50}
              className="titleInput"
              initialValue={user.introduceMe}
              ref={MyPageIntroduceRef}
            />
          </div>
        </div>
      )}
      <div className={clsx(styles.pointSection)}>
        <NormalText size="lg" bold>
          포인트
        </NormalText>
        {point && (
          <div className={clsx(styles.pointValue)}>
            <TitleText size="medium">{point.totalPoint}wc</TitleText>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPageTopContents;
