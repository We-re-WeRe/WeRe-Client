import TextButton from '@/components/atoms/TextButton';
import TitleText from '@/components/atoms/TitleText';
import StorageBox from '@/components/molecules/StorageBox';
import React from 'react';
import clsx from 'clsx';
import Test from '../../../../public/images/test3.jpg';
import styles from './index.module.scss';

const WebtoonInfoStorageList = () => {
  return (
    <div className={clsx(styles.webtoonInfoStorageList)}>
      <div className={clsx(styles.header)}>
        <TitleText size="medium" color="white">
          해당 웹툰이 들어간 보관함
        </TitleText>
        <TextButton link="a" size="medium">
          더보기
        </TextButton>
      </div>
      <li className={clsx(styles.storageList)}>
        <StorageBox image="" author="뀨니언" title="뀨니언의 정글 가이드" like={23} link="qw" userId="csk6314" />
        <StorageBox image="" author="뀨니언" title="뀨니언의 정글 가이드" like={23} link="qw" userId="csk6314" />
        <StorageBox image="" author="뀨니언" title="뀨니언의 정글 가이드" like={23} link="qw" userId="csk6314" />
        <StorageBox image="" author="뀨니언" title="뀨니언의 정글 가이드" like={23} link="qw" userId="csk6314" />
        <StorageBox image="" author="뀨니언" title="뀨니언의 정글 가이드" like={23} link="qw" userId="csk6314" />
      </li>
    </div>
  );
};

export default WebtoonInfoStorageList;
