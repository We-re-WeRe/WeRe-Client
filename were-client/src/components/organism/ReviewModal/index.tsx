'use client';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import Modal from '@/components/molecules/Modal';
import clsx from 'clsx';
import Stars from '@/components/molecules/Stars';
import NormalText from '@/components/atoms/NormalText';
import AddTag from '@/components/molecules/AddTag';
import WebtoonTag from '@/components/atoms/WebtoonTag';
import LimitedInput, { ILimitedInput } from '@/components/molecules/LimitedInput';
import TextButton from '@/components/atoms/TextButton';
import useReviewModal from './useReviewModal';
import styles from './index.module.scss';
import { useCreateReview } from '@/hooks/useReview';
import { useSearchParams } from 'next/navigation';

const ReviewModal = () => {
  const { isShow, closeModal } = useReviewModal();
  const [point, setPoint] = useState<number>(5);
  const [tags, setTags] = useState<string[]>([]);
  const reviewRef: RefObject<ILimitedInput> = useRef<ILimitedInput>(null);

  const titleId = parseInt(useSearchParams().get('titleId')!);
  const { mutate } = useCreateReview(titleId, () => {
    alert('리뷰를 작성하셨습니다.');
    closeModal();
  });

  useEffect(() => {
    return () => {
      setTags([]);
      setPoint(5);
    };
  }, [isShow]);

  const deleteTag = (target: string) => {
    const deletedTag = tags.filter(tag2 => target !== tag2);
    setTags(deletedTag);
  };

  return (
    <Modal isShow={isShow} onClose={closeModal} header="리뷰 작성" className={clsx(styles.reviewDialog)}>
      <Stars point={point} setPoint={setPoint} />
      <section className={clsx(styles.tagSection)}>
        <NormalText color="white" bold>
          태그를 추가해주세요.
        </NormalText>
        <AddTag addTag={setTags} tags={tags} />
        <div className={clsx(styles.tagList)}>
          {tags.map(tag => (
            <div key={tag} onClick={() => deleteTag(tag)} role="presentation" className={clsx(styles.tagWrapper)}>
              <WebtoonTag tagName={tag} size="medium" />
            </div>
          ))}
        </div>
      </section>
      <LimitedInput
        placeholder="리뷰 내용을 입력해주세요."
        maxLength={200}
        className={clsx(styles.reviewBox)}
        ref={reviewRef}
      />

      <div className={clsx(styles.buttonWrapper)}>
        <div className={clsx(styles.buttonArea)}>
          <TextButton size="medium" design="inverse" onClick={closeModal}>
            취소
          </TextButton>
          <TextButton
            size="medium"
            design="primary"
            onClick={() => {
              mutate({
                starPoint: point,
                contents: reviewRef.current!.getText,
                tags: tags.map(tag => ({ id: Math.random() * 1000000, contents: tag })),
                webtoonId: titleId,
              });
            }}
          >
            만들기
          </TextButton>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
