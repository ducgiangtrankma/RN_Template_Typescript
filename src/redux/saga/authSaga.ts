import * as authReducer from '@reducer/authReducer';
import * as appReducer from '@reducer/appReducer';
import {put} from 'redux-saga/effects';
import {createSliceSaga, SagaType} from 'redux-toolkit-saga';
import {ServiceSaga} from '../handleApi/saga';
const slice = createSliceSaga({
  name: 'authSaga',
  sagaType: SagaType.TakeLatest,
  caseSagas: {
    *signIn(action) {
      yield console.log('SignIn saga running', action);
      yield put(authReducer.signIn());
      const res: any = yield ServiceSaga.Post('login', action.payload);
      console.log(res);
      const {token, refresh_Token} = res.data;
      yield put(authReducer.signInSuccess(token));
      yield put(appReducer.onSetToken(token));
      yield put(appReducer.onSetRefreshToken(refresh_Token));
    },
    *getUser() {
      const res = yield ServiceSaga.Get('listUser');
      console.log('Saga', res);
    },
  },
});
const authSaga = slice.saga;
export default authSaga;
export const {signIn, getUser} = slice.actions;
/**
 * Example
 *    yield ServiceSaga.Post('categories', {
        name: 'Laptop',
      });
      //Customer request
      console.log(
        'Saga request',
        yield ServiceSaga.Request({
          method: 'GET',
          url: 'categories',
        }),
      );
      //use Request base : get,post,put,delete
      yield console.log(
        'Saga call',
        yield ServiceSaga.Get('categories', {name: 'Computers'}),
      );
 */
