import {Model} from './model';
import {YoutubeChannel, YoutubeVideo} from './youtube';
interface Quiz {
  answer: number;
}
export interface Game extends Model {
  id: string;
  video: YoutubeVideo;
  quizzes: Quiz[];
}
