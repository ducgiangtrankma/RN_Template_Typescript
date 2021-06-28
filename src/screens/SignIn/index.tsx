import React, {FC} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '@saga/authSaga';
import {useSelector} from '@common';
import {DefaultText} from '@components';
interface SignInProps {}
export const SignIn: FC<SignInProps> = ({}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(x => x.auth);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(signIn({token: 'New token'}))}>
        <DefaultText i18nKey="btn-signIn" />
      </TouchableOpacity>

      <ActivityIndicator animating={loading} color="red" size="large" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
