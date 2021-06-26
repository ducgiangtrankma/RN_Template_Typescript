import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {APP_SCREEN} from '@navigation/ScreenTypes';
interface SignInProps {}
export const SignIn: FC<SignInProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(APP_SCREEN.MAIN_APP)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
