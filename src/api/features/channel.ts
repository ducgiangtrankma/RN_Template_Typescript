import {Channel, Game} from '@src/model';
import {fake, MODEL_TYPE} from '@src/model/faker';
import {store} from '@store';
const {token} = store.getState().appReducer;

interface ChannelAPI {
  getAll: () => Promise<Channel[]>;
  getDetail: (id: string) => Promise<Channel>;
}
const channelAPI: ChannelAPI = {
  getAll: () => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.CHANNEL) as Channel[]);
    });
  },
  getDetail: id => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.CHANNEL, false) as Channel);
    });
  },
};
export {channelAPI};
