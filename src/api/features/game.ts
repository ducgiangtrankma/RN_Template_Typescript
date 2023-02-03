import {Game} from '@src/model';
import {fake, MODEL_TYPE} from '@src/model/faker';
import {store} from '@store';
const {token} = store.getState().appReducer;

interface GameAPI {
  getAll: () => Promise<Game[]>;
  getDetail: (id: string) => Promise<Game>;
}
const gameApi: GameAPI = {
  getAll: () => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.GAME) as Game[]);
    });
  },
  getDetail: id => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.GAME, false) as Game);
    });
  },
};
export {gameApi};
