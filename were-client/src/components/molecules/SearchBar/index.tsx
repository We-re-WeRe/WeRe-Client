'use client';

import IconButton from '@/components/atoms/IconButton';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import InputTable from '@/components/atoms/InputTable';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';

const SearchBar = () => {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div className={clsx(styles.searchBar)}>
      <IconButton
        type="search"
        size={24}
        onClick={() => {
          setShowInput(!showInput);
        }}
      />
      {showInput && (
        <InputTable
          placeholder="검색어를 입력해주세요."
          ref={searchInputRef}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              router.push(`/search/${searchInputRef.current?.value}`);
            }
          }}
          tabIndex={0}
        />
      )}
    </div>
  );
};

export default SearchBar;
