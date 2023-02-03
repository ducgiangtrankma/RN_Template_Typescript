import {YoutubeChannel} from '@src/model';
import {fake, MODEL_TYPE} from '@src/model/faker';
import {store} from '@store';
const {token} = store.getState().appReducer;

interface YoutubeAPI {
  getChannel: (id: string) => Promise<YoutubeChannel>;
}
const youtubeApi: YoutubeAPI = {
  getChannel: () => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.YOUTUBE_CHANNEL) as YoutubeChannel);
    });
  },
};
export {youtubeApi};
