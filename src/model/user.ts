import {Game} from './game';
import {Model} from './model';
import {YoutubeChannel} from './youtube';
export interface User extends Model {
  id: string;
  youtube_channel: YoutubeChannel;
  played_games: Game[];
}
