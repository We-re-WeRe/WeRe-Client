import Spinner from '@/components/atoms/Spinner';
import React from 'react';

const Loading = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spinner />
    </div>
  );
};

export default Loading;
