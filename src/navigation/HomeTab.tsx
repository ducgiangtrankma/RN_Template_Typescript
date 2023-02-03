/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Setting} from '@screens';
import {DefaultText, SvgIcon} from '@components';
import {sizes} from '@utils';
import {APP_SCREEN} from './ScreenTypes';
import {ProfileScreen} from '@src/screens/Profile';
import {IconButton} from 'react-native-paper';
import {ChannelsScreen} from '@src/screens/Channels';

const Tab = createBottomTabNavigator();
export default HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={APP_SCREEN.HOME}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="home"
                size={sizes(30)}
                iconColor={focused ? '#2F80ED' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={APP_SCREEN.CHANNELS}
        component={ChannelsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="account-group"
                size={sizes(30)}
                iconColor={focused ? '#2F80ED' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={APP_SCREEN.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="account"
                size={sizes(30)}
                iconColor={focused ? '#2F80ED' : 'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
