import ReviewModal from '@/components/organism/ReviewModal';
import StorageListModal from '@/components/organism/StorageListModal';
import WebtoonInfo from '@/components/organism/WebtoonInfo';
import WebtoonInfoContent from '@/components/organism/WebtoonInfoContent';
import React from 'react';

const WebtoonInfoTemplate = () => {
  return (
    <div>
      <WebtoonInfo />
      <WebtoonInfoContent />
      <ReviewModal />
      <StorageListModal />
    </div>
  );
};

export default WebtoonInfoTemplate;
