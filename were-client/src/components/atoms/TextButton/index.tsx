import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    link?: string;
    size: 'small' | 'medium' | 'large';
}

const TextButton = ({ children, onClick, disabled, type, link, size }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx('button', [size ?? 'medium'])}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx('button', [size ?? 'medium'])}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default TextButton;