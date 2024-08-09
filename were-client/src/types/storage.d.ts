import { ITag } from './tag';
import { IUser } from './user';

export interface IStorageCreate {
  name: string;
  imageURL: string;
  explain: string;
  isPublic: boolean;
  tags: ITag[];
}

export interface IStorageBase {
  id: number;
  createdAt: Date;
  name: string;
  imageURL: string;
  like: ILike;
}

export interface IStorage extends IStorageBase {
  explain: string;
  isPublic: boolean;
  tags: ITag[];
  isMine: boolean;
  user: IUser;
}
