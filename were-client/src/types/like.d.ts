export interface ILike {
  isLike: boolean;
  count: number;
}

export interface LikeParams {
  targetType: string;
  targetId: number;
}
