import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '../saga/rootSaga';
import authReducer from '../reducer/authReducer';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: ['auth'],
  blacklist: ['auth'],
};
const rootReducer = combineReducers({
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export {persistor, store};
export type RootState = ReturnType<typeof rootReducer>;
