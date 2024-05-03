export interface IUserBase {
  id: number;
  imageURL: string;
  nickname: string;
}

export interface IUser extends IUserBase {
  totalFollowers: number;
  introduceMe: string;
}
