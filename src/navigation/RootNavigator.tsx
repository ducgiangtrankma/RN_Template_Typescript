import React from 'react';
import {Auth} from './Stack';
import {MainScreen} from './Tab';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREEN, RootStackParamList} from './ScreenTypes';
import {DetailSetting} from '../screens/Setting/Detail';
import {SvgIcon} from '@components';
import {sizes} from '@utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from './NavigationServices';
const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = ({token}: {token?: string}) => {
  return (
    <RootStack.Navigator>
      {token === undefined ? (
        <RootStack.Screen
          name={APP_SCREEN.AUTHENTICATION}
          component={Auth}
          options={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name={APP_SCREEN.MAIN_APP}
          component={MainScreen}
          options={{gestureEnabled: false, headerShown: false}}
        />
      )}
      <RootStack.Screen
        name={APP_SCREEN.DETAIL}
        component={DetailSetting}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => goBack()}>
                <SvgIcon type="AntDesign" name="left" size={sizes._28sdp} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </RootStack.Navigator>
  );
};
