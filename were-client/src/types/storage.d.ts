import { ITag } from './tag';
import { IUser } from './user';

export interface IStorageBase {
  name: string;
  imageURL: string;
}

interface MetaData {
  explain: string;
  isPrivate: boolean;
  tags: ITag[];
}

export interface IStorageCreate extends IStorageBase, MetaData {
  userId: number;
}

export interface IStorage extends IStorageBase {
  id: number;
  totalLikes: number;
}

export interface IStorageDetail extends IStorage, MetaData {
  user: IUser;
}
