import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {APP_SCREEN} from '@navigation/ScreenTypes';
import {HomeScreen} from '@screens';
import PlayScreen from '@src/screens/Play';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChannelScreen} from '@src/screens/Channel';
import ResultScreen from '@src/screens/Result';
import ReviewScreen from '@src/screens/Review';
import {ProfileScreen} from '@src/screens/Profile';
import HomeTab from './HomeTab';
import {ChannelsScreen} from '@src/screens/Channels';
const sideNavigation = [
  {label: 'Detail', location: APP_SCREEN.DETAIL},
  {label: 'Page 2', location: 'Screen 2'},
  {label: 'Page 3', location: 'Screen 3'},
];
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export const MainNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.HOME_TAB}
      screenOptions={{
        headerShown: false,
      }}
      // drawerContent={props => (
      //   <DrawerContent {...props} sideNavigation={sideNavigation} />
      // )}
    >
      {/* <Stack.Screen name={APP_SCREEN.HOME} component={HomeScreen} /> */}
      <Stack.Screen name={APP_SCREEN.HOME_TAB} component={HomeTab} />
      <Stack.Screen name={APP_SCREEN.PLAY} component={PlayScreen} />
      <Stack.Screen name={APP_SCREEN.RESULT} component={ResultScreen} />
      <Stack.Screen name={APP_SCREEN.REVIEW} component={ReviewScreen} />
      {/* <Stack.Screen name={APP_SCREEN.PROFILE} component={ProfileScreen} /> */}
      <Stack.Screen name={APP_SCREEN.CHANNEL} component={ChannelScreen} />
    </Stack.Navigator>
  );
};
