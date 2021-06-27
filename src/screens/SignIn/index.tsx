import React, {FC} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '@saga/authSaga';
import {useSelector} from '@common/hook';
interface SignInProps {}
export const SignIn: FC<SignInProps> = ({}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(x => x.auth);
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => dispatch(signIn({token: 'New token'}))}>
        <Text>Login</Text>
      </TouchableOpacity>
      <ActivityIndicator animating={loading} color="red" size="large" />
    </SafeAreaView>
  );
};
