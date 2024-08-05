import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import React, { useState } from 'react';
import useReviewModal from '@/components/organism/ReviewModal/useReviewModal';
import useStorageListModal from '@/components/organism/StorageListModal/useStorageListModal';
import styles from './index.module.scss';
import { IconTagAdd } from '../../../../public/assets';
import { ILike } from '@/types/like';
import { useLikeWebtoon } from '@/hooks/useLike';

interface Props {
  like: ILike;
  titleId: number;
}

const WebtoonInfoUserItems = ({ titleId, like }: Props) => {
  const { openModal } = useReviewModal();
  const { openModal: openStorageModal } = useStorageListModal();
  const { isPending, mutate } = useLikeWebtoon(titleId);

  return (
    <div className={clsx(styles.webtoonInfoUserItems)}>
      <button
        role="checkbox"
        aria-checked={like.isLike}
        disabled={isPending}
        className={clsx(styles.likeButton)}
        onClick={() => {
          mutate({ targetId: titleId, targetType: 'webtoon', currentLike: like.isLike });
        }}
      >
        좋아요 {like ? '♥' : '♡'}
      </button>
      <TextButton size="medium" design="primary" link="d">
        보러가기
      </TextButton>
      <TextButton size="medium" design="primary" onClick={openModal}>
        리뷰쓰기
      </TextButton>
      <button className={clsx(styles.addStorageButton)} onClick={openStorageModal}>
        보관함 저장
        <IconTagAdd />
      </button>
      <div className={clsx(styles.userItemsBackground)} />
    </div>
  );
};

export default WebtoonInfoUserItems;
