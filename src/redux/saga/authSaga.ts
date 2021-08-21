import {delay} from '@common';
import * as authReducer from '@reducer/authReducer';
import * as appReducer from '@reducer/appReducer';
import {put} from 'redux-saga/effects';
import {createSliceSaga, SagaType} from 'redux-toolkit-saga';
const slice = createSliceSaga({
  name: 'authSaga',
  sagaType: SagaType.TakeLatest,
  caseSagas: {
    *signIn(action) {
      yield console.log('SignIn saga running', action);
      yield put(authReducer.signIn());
      yield delay(2000);
      yield put(appReducer.onSetToken('NewToken'));
    },
  },
});
const authSaga = slice.saga;
export default authSaga;
export const {signIn} = slice.actions;
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
