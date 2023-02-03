import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@src/screens/Login';
import React from 'react';
import {APP_SCREEN} from './ScreenTypes';
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
