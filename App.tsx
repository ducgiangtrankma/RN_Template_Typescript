import * as React from 'react';
import {Suspense} from 'react';
import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContainer} from '@navigation/AppNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18next from './src/utils/i18n/i18n';

interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18next}>
            <Suspense fallback={null}>
              <AppContainer />
            </Suspense>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
