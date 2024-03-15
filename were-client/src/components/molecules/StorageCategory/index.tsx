import React, { ReactNode } from "react";
import TitleText from "@/components/atoms/TitleText";
import clsx from "clsx";
import styles from './index.module.scss';
import TextButton from "@/components/atoms/TextButton";

interface Props {
    children: ReactNode;
    name: string;
    link: string;
}

const StorageCategory = ({ children, name, link }: Props) => {
    return (
        <div className={clsx(styles.categoryName, styles[name])}>
            <TitleText
                size='large'
                color='black'
            >
                {children}
            </TitleText>
            <TextButton size="small" link={link}>
                더보기
            </TextButton>
        </div>
    );
}

export default StorageCategory;