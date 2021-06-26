import React from 'react';
import {Auth} from './Stack';
import {MainScreen} from './Tab';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREEN, RootStackParamList} from './ScreenTypes';
const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = ({token}: {token?: string}) => {
  return (
    <RootStack.Navigator>
      {token === undefined ? (
        <RootStack.Screen
          name={APP_SCREEN.AUTHENTICATION}
          component={Auth}
          options={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name={APP_SCREEN.MAIN_APP}
          component={MainScreen}
          options={{gestureEnabled: false, headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};
