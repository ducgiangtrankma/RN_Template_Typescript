import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '../saga/rootSaga';
import authReducer from '../reducer/authReducer';
import languageReducer from '../reducer/languageReducer';
import appReducer from '../reducer/appReducer';
import {createLogger} from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const middleware = [];
middleware.push(createLogger());
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['language'],
  blacklist: ['auth'],
};
const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
  appReducer: appReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  // middleware: [sagaMiddleware, ...middleware],
  middleware: [sagaMiddleware],
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export {persistor, store};
export type RootState = ReturnType<typeof rootReducer>;
