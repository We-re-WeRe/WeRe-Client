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
    usage: 'review' | 'header' | 'mypage' | 'storage'
}

type typeName = 'review' | 'header' | 'mypage' | 'storage';

type imgType = {
    [k in typeName]: {
        width: number;
        height: number;
    }
}

const usageSize: imgType = {
    review: {
        width: 11,
        height: 11
    },
    header: {
        width: 60,
        height: 60
    },
    mypage: {
        width: 202,
        height: 202
    },
    storage: {
        width: 113,
        height: 113
    }
}

const ProfileButton = ({ onClick, disabled, type, imgSrc, link, usage }: Props) => {
    if (link) {
        return (
            <Link
                href={link}
                className={clsx(styles.imageButton, styles[usage])}
            >
                <Image
                    src={imgSrc}
                    alt="profile"
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
                alt="profile"
                width={usageSize[usage].width}
                height={usageSize[usage].height}
            />
        </button>
    );
}

export default ProfileButton;