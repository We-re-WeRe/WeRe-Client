'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/organism/Layout/Header';

const LayoutProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/login' && <Header />}
      {children}
    </>
  );
};

export default LayoutProvider;
