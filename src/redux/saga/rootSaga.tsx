import {createSagas} from 'redux-toolkit-saga';
import authSaga from './authSaga';
const rootSaga = createSagas([authSaga]);
export default rootSaga;
