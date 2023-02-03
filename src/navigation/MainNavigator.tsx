import {APP_SCREEN} from '@navigation/ScreenTypes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChannelScreen,
  CMSScreen,
  PlayScreen,
  ResultScreen,
  ReviewScreen,
} from '@src/screens';
import React from 'react';
import HomeTab from './HomeTab';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export const MainNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.CMS}
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
      <Stack.Screen name={APP_SCREEN.CMS} component={CMSScreen} />
      {/* <Stack.Screen name={APP_SCREEN.PROFILE} component={ProfileScreen} /> */}
      <Stack.Screen name={APP_SCREEN.CHANNEL} component={ChannelScreen} />
    </Stack.Navigator>
  );
};
