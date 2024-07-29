import WebtoonInfoTemplate from '@/components/template/WebtoonInfoTemplate';
import React from 'react';

const WebtoonInfoPage = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  console.log(searchParams);
  console.log(typeof searchParams);
  if (!searchParams || !searchParams['titleId']) {
    return (
      <span style={{ color: 'white', fontSize: '24px', textAlign: 'center', width: '100%', display: 'block' }}>
        잘못된 접근입니다.
      </span>
    );
  }

  return <WebtoonInfoTemplate />;
};

export default WebtoonInfoPage;
