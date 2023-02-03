import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@screens';
import {APP_SCREEN} from './ScreenTypes';
import {LoginScreen} from '@src/screens/Login';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APP_SCREEN.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {AuthNavigator};
