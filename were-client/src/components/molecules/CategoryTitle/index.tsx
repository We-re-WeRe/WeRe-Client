import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import TitleText from "@/components/atoms/TitleText";
import NormalText from "@/components/atoms/NormalText";

interface Props {
    category: string;
    count: number;
}

const CategoryTitle = ({ category, count }: Props) => {
    return (
        <div className={clsx(styles.category)}>
            <div className={clsx(styles.title)}>
                <TitleText size="medium">{category}</TitleText>
            </div>
            <div className={clsx(styles.count)}>
                <NormalText size="xs">[{count} 개]</NormalText>
            </div>
        </div>

    );
}

export default CategoryTitle;