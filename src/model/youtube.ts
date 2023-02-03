import {Model} from './model';

export interface YoutubeChannel extends Model {
  id: string;
  title: string;
  avatar: YoutubeImage;
  link: string;
}
export interface YoutubeVideo extends Model {
  id: string;
  channel: YoutubeChannel;
  title: string;
  description: string;
  thumbnail: YoutubeImage;
  publishedAt: Date;
}

export interface YoutubeImage {
  url: string;
  width: number;
  height: number;
}
