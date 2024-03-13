import React from "react";
import styles from './index.module.scss';
import clsx from "clsx";
import ImageButton from "@/components/atoms/ImageButton";
import NormalText from "@/components/atoms/NormalText";
import Image from "next/image";
import LIKE_HEART from "@/../public/assets/like.svg";
import TextButton from "@/components/atoms/TextButton";

interface Props {
    image: string;
    title: string;
    author: string;
    like: number;
    link: string;
}

const StorageBox = ({ image, title, author, like, link }: Props) => {
    return (
        <div className={clsx(styles.commonStorageBox)}>
            <div className={clsx(styles.overTitle)}>
                {/* Image */}
                <div style={{ marginBottom: 10 }}>
                    <ImageButton usage="thumbnail" imgSrc={image} link={link} />
                </div>
                {/* title */}
                <TextButton size="medium">
                    {title}
                </TextButton>
            </div>
            <div className={clsx(styles.underTitle)}>
                {/* author */}
                <TextButton size="medium">
                    {author}
                </TextButton>
                {/* like */}
                <NormalText size="md">
                    <LIKE_HEART width={15} height={15} />
                    {like}
                </NormalText>
            </div>
        </div>
    );
}

export default StorageBox;
