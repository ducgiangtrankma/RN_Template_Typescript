/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FoodMenu, Home, Setting} from '@screens';
import {DefaultText, SvgIcon} from '@components';
import {sizes} from '@utils';
import {APP_SCREEN} from './ScreenTypes';

const Tab = createBottomTabNavigator();
const MainScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}}>
      <Tab.Screen
        name={APP_SCREEN.HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => {
            if (focused) {
              return (
                <DefaultText
                  style={{color: '#2F80ED', fontSize: sizes._12sdp}}
                  i18nKey="TabBar.home"
                />
              );
            } else {
              return (
                <DefaultText
                  style={{color: 'gray', fontSize: sizes._12sdp}}
                  i18nKey="TabBar.home"
                />
              );
            }
          },
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <SvgIcon
                  type={'AntDesign'}
                  name="home"
                  size={sizes._20sdp}
                  style={{color: '#2F80ED'}}
                />
              );
            } else {
              return (
                <SvgIcon
                  type={'AntDesign'}
                  name="home"
                  size={sizes._20sdp}
                  style={{color: 'gray'}}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name={APP_SCREEN.SETTING}
        component={Setting}
        options={{
          tabBarLabel: ({focused}) => {
            if (focused) {
              return (
                <DefaultText
                  style={{color: '#2F80ED', fontSize: sizes._12sdp}}
                  i18nKey="TabBar.setting"
                />
              );
            } else {
              return (
                <DefaultText
                  style={{color: 'gray', fontSize: sizes._12sdp}}
                  i18nKey="TabBar.setting"
                />
              );
            }
          },
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <SvgIcon
                  type={'AntDesign'}
                  name="setting"
                  size={sizes._20sdp}
                  style={{color: '#2F80ED'}}
                />
              );
            } else {
              return (
                <SvgIcon
                  type={'AntDesign'}
                  name="setting"
                  size={sizes._20sdp}
                  style={{color: 'gray'}}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name={APP_SCREEN.FOOD}
        component={FoodMenu}
        options={{
          tabBarLabel: ({focused}) => {
            if (focused) {
              return (
                <DefaultText
                  style={{color: '#2F80ED', fontSize: sizes._12sdp}}
                  i18nKey="TabBar.food"
                />
              );
            } else {
              return (
                <DefaultText
                  style={{color: 'gray', fontSize: sizes._12sdp}}
                  i18nKey="TabBar.food"
                />
              );
            }
          },
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <SvgIcon
                  type={'AntDesign'}
                  name="setting"
                  size={sizes._20sdp}
                  style={{color: '#2F80ED'}}
                />
              );
            } else {
              return (
                <SvgIcon
                  type={'AntDesign'}
                  name="setting"
                  size={sizes._20sdp}
                  style={{color: 'gray'}}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
export {MainScreen};
