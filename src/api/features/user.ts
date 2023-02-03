import {User, Game} from '@src/model';
import {fake, MODEL_TYPE} from '@src/model/faker';
import {store} from '@store';
const {token} = store.getState().appReducer;

interface UserAPI {
  getDetail: (id: string) => Promise<User>;
  getMe: () => Promise<User>;
}
const userAPI: UserAPI = {
  getDetail: (id: string) => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.USER, false) as User);
    });
  },
  getMe: () => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.USER, false) as User);
    });
  },
};
export {userAPI};
