import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainScreen} from './Tab';
import {DrawerContent} from './DrawerContent';
import {APP_SCREEN} from '@navigation/ScreenTypes';
const sideNavigation = [
  {label: 'Detail', location: APP_SCREEN.DETAIL},
  {label: 'Page 2', location: 'Screen 2'},
  {label: 'Page 3', location: 'Screen 3'},
];
const Drawer = createDrawerNavigator();
export const DrawerNavigator: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Launch"
      drawerContent={props => (
        <DrawerContent {...props} sideNavigation={sideNavigation} />
      )}>
      <Drawer.Screen name="Tabs" component={MainScreen} />
    </Drawer.Navigator>
  );
};
