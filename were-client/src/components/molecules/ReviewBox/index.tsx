import React from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./index.module.scss";
import IconText from "../IconText";
import NormalText from "@/components/atoms/NormalText";
import TextButton from "@/components/atoms/TextButton";

interface Props {
    star: number;
    comment: string;
    like: number;
    thumbnail: string;
    link: string;
}

const ReviewBox = ({ star, comment, like, thumbnail, link }: Props) => {
    return (
        <div className={clsx(styles.reviewBox)}>
            <Image src={thumbnail} alt="" width={80} height={100} />
            <div className={clsx(styles.rightContents)}>
                <IconText type="star" text={star} size="sm" />
                <NormalText size="sm">{comment}</NormalText>
                <div className={clsx(styles.underText)}>
                    <IconText type="like" text={like} size="sm" />
                    <TextButton size="small" link={link}>웹툰 보러가기 →</TextButton>
                </div>
            </div>
        </div>
    );
}

export default ReviewBox;