import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '@screens';
import {APP_SCREEN} from './ScreenTypes';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APP_SCREEN.LOGIN}
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {Auth};
