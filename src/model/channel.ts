import {Game} from './game';
import {Model} from './model';
import {YoutubeChannel} from './youtube';
export interface Channel extends Model {
  id: string;
  youtube_channel: YoutubeChannel;
  games: Game[];
}
