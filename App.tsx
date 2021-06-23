import * as React from 'react';
import {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Test} from './src/Test';
interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <SafeAreaView>
      <Test value={'Create template'} />
    </SafeAreaView>
  );
};
