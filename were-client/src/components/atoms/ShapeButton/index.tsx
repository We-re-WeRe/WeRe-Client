import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "./index.module.scss";

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    link?: string;
    shape: 'circle';
}

const ShapeButton = ({ children, onClick, disabled, type, shape, link }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx('button', [shape ?? 'square'])}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx('button', [shape ?? 'square'])}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ShapeButton;