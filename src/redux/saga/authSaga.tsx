import * as authReducer from '@reducer/authReducer';
import {put} from 'redux-saga/effects';
import {createSliceSaga, SagaType} from 'redux-toolkit-saga';
const slice = createSliceSaga({
  name: 'authSaga',
  sagaType: SagaType.TakeLatest,
  caseSagas: {
    *signIn(action) {
      yield console.log('SignIn saga running', action);
      yield put(authReducer.signIn());
      yield put(authReducer.signInSuccess('New token'));
    },
  },
});
const authSaga = slice.saga;
export default authSaga;
export const {signIn} = slice.actions;
