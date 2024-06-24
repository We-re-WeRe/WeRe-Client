export interface IUserBase {
  id: number;
  imageURL: string;
  nickname: string;
}

export interface IUser extends IUserBase {
  totalFollowers: number;
  introduceMe: string;
  isMine: boolean;
  isFollowing: boolean;
}

export interface IUserLogin {
  account: string;
  password: string;
}

export interface IUserSignUp extends IUserLogin {
  user: {
    nickname: string;
    name: string;
    sex: string;
    birth: Date;
  };
}
