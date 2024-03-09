import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    link?: string;
    size: 'small' | 'medium' | 'large';
}

const TextButton = ({ children, className, disabled, type, link, size }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx(className)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default TextButton;