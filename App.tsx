import * as React from 'react';
import {Suspense} from 'react';
import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContainer} from '@navigation/AppNavigator';
interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <Suspense fallback={null}>
        <AppContainer />
      </Suspense>
    </SafeAreaProvider>
  );
};
