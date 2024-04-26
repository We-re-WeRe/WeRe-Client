'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import TitleText from '@/components/atoms/TitleText';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';

interface Props {
  isShow: boolean;
  children: ReactNode;
  header?: string;
  className?: string;
  onClose: () => void;
}

const Modal = ({ isShow, header, children, onClose, className }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('modal');
    setMounted(true);

    return () => {
      onClose();
    };
  }, []);

  if (!ref.current || !mounted) return null;

  return isShow
    ? createPortal(
        <div className={clsx(styles.modalWrapper)}>
          <button className={clsx(styles.bg)} onClick={onClose} />

          <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.modalDialog, className)}>
              <div className={clsx(styles.header)}>
                <TitleText size="medium" color="white">
                  {header}
                </TitleText>
              </div>
              <div className={clsx(styles.contents)}>{children}</div>
            </div>
          </div>
        </div>,
        ref.current,
      )
    : null;
};

export default Modal;
