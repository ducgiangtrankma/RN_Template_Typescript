import React, {FC} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {signIn} from '@saga/authSaga';
import {useSelector, dispatch} from '@common';
import {DefaultText} from '@components';
interface SignInProps {}
export const SignIn: FC<SignInProps> = ({}) => {
  const {loading} = useSelector(x => x.auth);
  const email = 'tranducgiangact@gmail.com';
  const password = 'Aa@123456';
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          dispatch(
            signIn({
              email,
              password,
            }),
          )
        }>
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
