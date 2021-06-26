import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Setting} from '@screens';
import {APP_SCREEN} from './ScreenTypes';
const Tab = createBottomTabNavigator();
const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={APP_SCREEN.HOME} component={Home} />
      <Tab.Screen name={APP_SCREEN.SETTING} component={Setting} />
    </Tab.Navigator>
  );
};
export {MainScreen};
