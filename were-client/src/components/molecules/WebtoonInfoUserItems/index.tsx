import TextButton from '@/components/atoms/TextButton';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './index.module.scss';

const WebtoonInfoUserItems = () => {
  const [like, setLike] = useState(false);

  return (
    <div className={clsx(styles.webtoonInfoUserItems)}>
      <button
        role="checkbox"
        aria-checked={like}
        className={clsx(styles.likeButton)}
        onClick={() => {
          setLike(!like);
        }}
      >
        좋아요 ♥
      </button>
      <TextButton size="medium" design="primary">
        보러가기
      </TextButton>
      <TextButton size="medium" design="primary">
        리뷰쓰기
      </TextButton>
      <div className={clsx(styles.userItemsBackground)} />
    </div>
  );
};

export default WebtoonInfoUserItems;
