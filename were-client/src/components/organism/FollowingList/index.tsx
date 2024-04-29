import React from 'react';
import clsx from 'clsx';
import FollowingProfileBox from '@/components/molecules/FollowingProfileBox';
import styles from './index.module.scss';

interface IProfile {
  image: string;
  name: string;
  follower: number;
  link: string;
}

interface Props {
  profiles?: IProfile[];
}

const FollowingList = ({ profiles }: Props) => {
  return (
    <div className={clsx(styles.followingList)}>
      {profiles ? (
        <div className={clsx(styles.followings)}>
          {profiles.map(profile => (
            <FollowingProfileBox
              key={profile.name}
              image={profile.image}
              name={profile.name}
              follower={profile.follower}
              link={profile.link}
            />
          ))}
        </div>
      ) : (
        <div className={clsx(styles.emptyFollowing)}>팔로우한 유저가 없습니다.</div>
      )}
    </div>
  );
};

export default FollowingList;
