import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface Props {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    link?: string;
    usage: 'thumbnail' | 'logo' | 'filter'
}

const ImageButton = ({ children, onClick, disabled, type, link, usage }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx(styles.imageButton, styles[usage ?? 'thumbnail'])}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(styles.imageButton, styles[usage ?? 'thumbnail'])}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ImageButton;