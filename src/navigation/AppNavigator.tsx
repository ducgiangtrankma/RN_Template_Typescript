import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './RootNavigator';
import {useSelector} from '@common/hook';

export const AppContainer = () => {
  const {token} = useSelector(x => x.auth);
  return (
    <NavigationContainer>
      <RootNavigation token={token} />
    </NavigationContainer>
  );
};
