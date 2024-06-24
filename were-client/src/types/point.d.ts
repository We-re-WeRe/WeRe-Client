export interface IPointBase {
  userId: number;
  mount?: number;
  reason: string;
}

export interface IPoint extends IPointBase {
  id: number;
  createdAt: Date;
}

export interface IPointSum {
  userId: number;
  totalPoint: number;
}
