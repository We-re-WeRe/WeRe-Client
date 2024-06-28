import { ITag } from './tag';
import { IUser } from './user';
import { ILike } from './like';

export interface IStorageBase {
  name: string;
  imageURL: string;
}

interface MetaData {
  explain: string;
  isPrivate: boolean;
  tags: ITag[];
}

export interface IStorageCreate extends IStorageBase, MetaData {}

export interface IStorage extends IStorageBase {
  id: number;
  like: ILike;
}

export interface IStorageDetail extends IStorage, MetaData {
  createdAt: Date;
  user: IUser;
}
