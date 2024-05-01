import React from 'react';
import TitleText from '@/components/atoms/TitleText';
import clsx from 'clsx';
import ReviewCard from '@/components/molecules/ReviewCard';
import styles from './index.module.scss';

const WebtoonInfoReviews = () => {
  return (
    <div className={clsx(styles.webtoonInfoReviews)}>
      <TitleText size="medium" color="white">
        리뷰
      </TitleText>
      <li className={clsx(styles.reviewList)}>
        <div className={clsx(styles.leftSection)}>
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={24}
            review="a"
          />
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="평생 욕심없이 살아온 소심한 윤리교사 전햇살, 그녀의 옆집에 욕망과 쾌락의 신이 이사왔다. 섹시한 외모에 치명적인 향기를 내뿜는 그의 이름은 ‘디오니소스’, 줄여서 디오. 디오가 신계 와인을 제조할 때 꼭 들어가야 하는 재료는 인간의 평생 이루지 못한 짙은 욕망이다. "
          />
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="평생 욕심없이 살아온 소심한 윤리교사 전햇살, 그녀의 옆집에 욕망과 쾌락의 신이 이사왔다. 섹시한 외모에 치명적인 향기를 내뿜는 그의 이름은 ‘디오니소스’, 줄여서 디오. 디오가 신계 와인을 제조할 때 꼭 들어가야 하는 재료는 인간의 평생 이루지 못한 짙은 욕망이다. "
          />
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="평생 욕심없이 살아온 소심한 윤리교사 전햇살, 그녀의 옆집에 욕망과 쾌락의 신이 이사왔다. 섹시한 외모에 치명적인 향기를 내뿜는 그의 이름은 ‘디오니소스’, 줄여서 디오. 디오가 신계 와인을 제조할 때 꼭 들어가야 하는 재료는 인간의 평생 이루지 못한 짙은 욕망이다. "
          />
        </div>
        <div className={clsx(styles.rightSection)}>
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="나는 벌레다."
          />
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="나는 벌레다."
          />
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다."
          />
          <ReviewCard
            profileImage=""
            nickname="임건우"
            userID="lig2424"
            date="2024.04.30 15:03"
            starRate={4}
            likes={25}
            review="나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다.나는 벌레다."
          />
        </div>
      </li>
    </div>
  );
};

export default WebtoonInfoReviews;
