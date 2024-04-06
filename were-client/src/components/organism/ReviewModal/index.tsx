import React, { useEffect, useState } from 'react';
import Modal from '@/components/molecules/Modal';
import clsx from 'clsx';
import Stars from '@/components/molecules/Stars';
import NormalText from '@/components/atoms/NormalText';
import useReviewModal from './useReviewModal';
import styles from './index.module.scss';

const ReviewModal = () => {
  const { isShow, closeModal } = useReviewModal();
  const [point, setPoint] = useState<number>(5);

  useEffect(() => {
    return () => {
      setPoint(5);
    };
  }, [isShow]);

  return (
    <Modal isShow={isShow} onClose={closeModal} header="리뷰 쓰기" className={clsx(styles.reviewDialog)}>
      <div>
        <Stars point={point} setPoint={setPoint} />
      </div>
    </Modal>
  );
};

export default ReviewModal;
