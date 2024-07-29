'use client';
import Modal from '@/components/molecules/Modal';
import React from 'react';
import clsx from 'clsx';
import NormalText from '@/components/atoms/NormalText';
import StorageListItem from '@/components/molecules/StorageListItem';
import useStorageListModal from './useStorageListModal';
import styles from './index.module.scss';

interface storageItem {
  id: number;
  imgURL: string;
  title: string;
  webtoonNumber: number;
}

const listItem: storageItem[] = [];

const StorageListModal = () => {
  const { isShow, closeModal } = useStorageListModal();

  return (
    <Modal isShow={isShow} onClose={closeModal} header="보관함에 저장" className={clsx(styles.storageListModal)}>
      <section className={styles.storageListSection}>
        <NormalText color="white">전체 보관함</NormalText>
        {listItem.length > 0 ? (
          listItem.map(item => (
            <StorageListItem key={item.id} imgURL={item.imgURL} title={item.title} webtoonNumber={item.webtoonNumber} />
          ))
        ) : (
          <span className={styles.noStorageText}>보관함이 존재하지 않습니다.</span>
        )}
      </section>
    </Modal>
  );
};

export default StorageListModal;
