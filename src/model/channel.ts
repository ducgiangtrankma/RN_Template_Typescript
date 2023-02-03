import {Game} from './game';
import {Model} from './model';
import {YoutubeChannel, YoutubeVideo} from './youtube';
interface Quiz {
  answer: number;
}
export interface Channel extends Model {
  id: string;
  youtube_channel: YoutubeChannel;
  games: Game[];
}
