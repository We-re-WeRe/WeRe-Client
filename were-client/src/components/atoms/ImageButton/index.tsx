import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface Props {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    imgSrc: string;
    link: string;
    usage: 'thumbnail' | 'logo' | 'filter' | 'more'
}

type typeName = 'thumbnail' | 'logo' | 'filter' | 'more';

type imgType = {
    [k in typeName]: {
        width: number;
        height: number;
    }
}

const usageSize: imgType = {
    thumbnail: {
        width: 160,
        height: 200
    },
    logo: {
        width: 171,
        height: 58
    },
    filter: {
        width: 50,
        height: 50
    },
    more: {
        width: 5,
        height: 15
    }
}

const ImageButton = ({ onClick, disabled, type, imgSrc, link, usage }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx(styles.imageButton, styles[usage])}
            >
                <Image
                    src={imgSrc}
                    alt="no Image"
                    width={usageSize[usage].width}
                    height={usageSize[usage].height}
                />
            </Link>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(styles.imageButton, styles[usage])}
            onClick={onClick}
        >
            <Image
                src={imgSrc}
                alt="no Image"
                width={usageSize[usage].width}
                height={usageSize[usage].height}
            />
        </button>
    );
}

export default ImageButton;