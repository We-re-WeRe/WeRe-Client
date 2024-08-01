export interface ILike {
  isLike: boolean;
  count: number;
}

export interface LikeParams {
  targetType: TARGET_TPYES;
  targetId: number;
}

type TARGET_TPYES = 'webtoon' | 'storage' | 'review';
