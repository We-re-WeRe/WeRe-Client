import { ITag } from './tag';
import { IUserBase } from './user';
import { ILike } from './like';
import { IWebtoonBase } from './webtoon';

export interface IReviewBase {
  contents: string;
  starPoint: number;
  tags: ITag[];
}

// review 수정
export interface IReviewPatch extends IReviewBase {
  id: number;
}

// review 생성
export interface IReviewCreate extends IReviewBase {
  webtoonId: number;
}

export interface IReview extends IReviewBase {
  id: number;
  like: ILike;
  createdAt: Date;
  isMine: boolean;
}

// 유저 페이지에서 리뷰
export interface IUserReview extends IReview {
  webtoon: IWebtoonBase;
}

// 웹툰 인포 페이지에서 리뷰
export interface IWebtoonReview extends IReview {
  user: IUserBase;
}
