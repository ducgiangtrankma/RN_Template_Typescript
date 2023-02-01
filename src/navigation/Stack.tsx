import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@screens';
import {APP_SCREEN} from './ScreenTypes';
const Stack = createNativeStackNavigator();
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
