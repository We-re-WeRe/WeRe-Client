'use client'
import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import Image from "next/image";
import ProfileButton from "@/components/atoms/ProfileButton";
import clickProfile from "@/../public/images/hover-profile.png";
import defaultProfile from "@/../public/images/default-profile.png";

interface Props {
    imgSrc?: string;
    edit: boolean;
}

const ProfileBox = ({ imgSrc, edit }: Props) => {
    if (!edit) { // 유저 프로필 사진 부분
        return (
            <div className={clsx(styles.profileBox)}>
                <Image
                    src={imgSrc ?? defaultProfile}
                    alt="profile"
                    width={202}
                    height={202}
                    style={{ borderRadius: "50%" }}
                />
            </div>
        );
    }
    // 마이 페이지 프로필 사진 부분
    const [isHover, setIsHover] = useState(false);
    const [profileImage, setProfileImage] = useState();
    const fileInput = useRef(null);

    /**파일 업로드 */
    const onClickUpload = async (e: any) => {
        const file = e.target.files[0]; // 이미지 단 1개만 받음
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
    }

    /**마우스 오버 */
    const onMouseOverProfile = () => {
        setIsHover(true);
    }
    /**마우스 리브 */
    const onMouseLeaveProfile = () => {
        setIsHover(false);
    }

    return (
        <div
            className={clsx(styles.profileBox)}
            onMouseOver={onMouseOverProfile}
            onMouseLeave={onMouseLeaveProfile}
        >
            <div className={clsx(styles.profile)}>
                <ProfileButton usage="mypage" type="button" imgSrc={imgSrc} />
            </div>
            {isHover && <div className={clsx(styles.hoverProfile)}>
                <Image src={clickProfile} alt="" width={202} height={202} />
            </div>}
        </div>
    );
}

export default ProfileBox;