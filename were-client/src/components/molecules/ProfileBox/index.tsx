import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import Image from "next/image";
import ProfileButton from "@/components/atoms/ProfileButton";
import camera from "@/../public/images/camera.png";

interface Props {
    imgSrc?: string;
}
/**
 * hover시 흰색커버로 카메라 모양 출력
 * 클릭시 파일 업로드
 */
const ProfileBox = ({ imgSrc }: Props) => {
    const onClick = () => {
        /**파일 업로드 */
    }
    const onHoverProfile = () => {
        /**카메라 이미지 */
    }

    return (
        <div
            className={clsx(styles.profileBox)}
        >
            <div style={{ position: "relative" }}>
                <ProfileButton usage="mypage" imgSrc={imgSrc} />
            </div>
        </div>
    );
}

export default ProfileBox;