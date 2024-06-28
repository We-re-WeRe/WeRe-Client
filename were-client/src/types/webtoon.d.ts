import { ILike } from './like';
import { IWebtoonReview } from './review';
import { IStorage } from './storage';

export interface IWebtoonBase {
  id: number;
  title: string;
  imageURL: string;
  author: string[];
  painter: string[];
}

export interface IWebtoon extends IWebtoonBase {
  totalStarPoint: number;
  reviewCount: number;
}

export interface IWebtoonDetail extends IWebtoon {
  webtoonURL: string;
  providingCompany: string;
  day: string;
  genre: string;
  explain: string;
  viewCount: number;
  like: ILike;
  storages: IStorage[];
  reviews: IWebtoonReview[];
}

export interface IStorageWebtoon extends IWebtoonBase {
  like: ILike;
  review: IWebtoonReview;
}
