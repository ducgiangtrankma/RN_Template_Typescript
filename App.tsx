import * as React from 'react';
import {Suspense} from 'react';
import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContainer} from '@navigation/AppNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={null}>
            <AppContainer />
          </Suspense>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
