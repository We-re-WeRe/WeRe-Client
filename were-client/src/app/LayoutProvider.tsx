'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/organism/Layout/Header';

const LayoutProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname();
  const noHeaderPage = pathname === '/login' || pathname === '/join';

  return (
    <>
      {!noHeaderPage && <Header />}
      {children}
    </>
  );
};

export default LayoutProvider;
