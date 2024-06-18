import React from 'react';
import TitleText from '@/components/atoms/TitleText';
import clsx from 'clsx';
import TextButton from '@/components/atoms/TextButton';
import styles from './index.module.scss';

interface Props {
  name: string;
  link: string;
}

const CollectionCategory = ({ name, link }: Props) => {
  return (
    <div className={clsx(styles.categoryName)}>
      <TitleText size="large" color="black">
        {name}
      </TitleText>
      <TextButton size="small" link={link}>
        더보기
      </TextButton>
    </div>
  );
};

export default CollectionCategory;
