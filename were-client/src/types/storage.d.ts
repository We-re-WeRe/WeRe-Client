import { ITag } from './tag';
import { IUser } from './user';

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
  like: ILike;
  createdAt: Date;
}

export interface IStorageDetail extends IStorage, MetaData {
  user: IUser;
}
