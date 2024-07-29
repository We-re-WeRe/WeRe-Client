import ReviewModal from '@/components/organism/ReviewModal';
import StorageListModal from '@/components/organism/StorageListModal';
import WebtoonInfo from '@/components/organism/WebtoonInfo';
import { default as InfoLoading } from '@/components/organism/WebtoonInfo/Skeleton';
import WebtoonInfoContent from '@/components/organism/WebtoonInfoContent';
import React, { Suspense } from 'react';

const WebtoonInfoTemplate = () => {
  return (
    <div>
      <Suspense fallback={<InfoLoading />}>
        <WebtoonInfo />
      </Suspense>
      <WebtoonInfoContent />
      <ReviewModal />
      <StorageListModal />
    </div>
  );
};

export default WebtoonInfoTemplate;
