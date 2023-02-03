import AsyncStorage from '@react-native-async-storage/async-storage';
import {Channel} from '@src/model';
import {fake, MODEL_TYPE} from '@src/model/faker';
import {store} from '@store';
const {token} = store.getState().appReducer;

interface ChannelAPI {
  getAll: () => Promise<Channel[]>;
  getDetail: (id: string) => Promise<Channel>;
}
const channelAPI: ChannelAPI = {
  getAll: () => {
    return new Promise(async resolve => {
      let data = await AsyncStorage.getItem('channels');
      resolve(data != null ? JSON.parse(data) : []);
      //resolve(fake(MODEL_TYPE.CHANNEL) as Channel[]);
    });
  },
  getDetail: id => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.CHANNEL, false) as Channel);
    });
  },
};
export {channelAPI};
