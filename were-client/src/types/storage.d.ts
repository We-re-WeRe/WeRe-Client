import { ITag } from './tag';
import { IUser } from './user';
import { ILike } from './like';

export interface IStorageBase {
  name: string;
  imageURL: string;
}

interface MetaData {
  explain: string;
  isPublic: boolean;
  tags: ITag[];
}

export interface IStorageCreate extends IStorageBase, MetaData {}

export interface IStorage extends IStorageBase {
  id: number;
  createdAt: Date;
  like: ILike;
}

export interface IStorageDetail extends IStorage, MetaData {
  isMine: boolean;
  user: IUser;
}
