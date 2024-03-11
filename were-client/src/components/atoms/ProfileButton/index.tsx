import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from './index.module.scss';

interface Props {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    link?: string;
    size: 'review' | 'header' | 'mypage' | 'storage';
}

const ProfileButton = ({ children, onClick, disabled, type, link, size }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx(styles.imageButton, styles[size ?? 'review'])}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(styles.profileButton, styles[size ?? 'review'])}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ProfileButton;