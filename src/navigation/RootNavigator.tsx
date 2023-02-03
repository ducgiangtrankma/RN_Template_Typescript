import React from 'react';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_SCREEN, RootStackParamList} from './ScreenTypes';
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = ({token}: {token?: string}) => {
  return (
    <RootStack.Navigator>
      {token === undefined ? (
        <RootStack.Screen
          name={APP_SCREEN.AUTHENTICATION}
          component={AuthNavigator}
          options={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name={APP_SCREEN.MAIN_APP}
          component={MainNavigator} //Replace DrawerNavigator with MainScreen in ./Tab if you don't want to use drawer menu
          options={{gestureEnabled: false, headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};
