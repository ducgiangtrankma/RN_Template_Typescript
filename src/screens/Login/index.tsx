import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Easing,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {
  sizes,
  spacing,
  _font_lg,
  _font_md,
  _font_xl,
  _font_xxl,
  _getSize,
  _screen_width,
} from '@utils';
import {PageContainer} from '@components';
import {Button} from 'react-native-paper';
import {images} from '@assets/images';
import {useDispatch} from 'react-redux';
import {onSetToken} from '@reducer/appReducer';
interface LoginScreenProps {}
export const LoginScreen: FC<LoginScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const loginGuest = () => {
    dispatch(onSetToken('123'));
  };
  const loginYT = () => {
    dispatch(onSetToken('123'));
  };
  return (
    <PageContainer style={styles.container}>
      <View style={styles.top_view}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <View style={styles.bottom_view}>
        <Text style={styles.bottom_title}>Welcome</Text>
        <Text style={styles.bottom_desc}>
          Please not: Sign in using Youtube or play as Guest
        </Text>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={loginYT}
            labelStyle={styles.buttonLabel}>
            Login Youtube
          </Button>
          <Button
            style={styles.button}
            mode="outlined"
            onPress={loginGuest}
            labelStyle={styles.buttonLabel}>
            Play as Guest
          </Button>
        </View>
      </View>
    </PageContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonLabel: {
    fontWeight: '700',
    color: '#fff',
    fontSize: _font_md,
  },
  top_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: _screen_width * 0.8,
    resizeMode: 'contain',
  },
  bottom_view: {
    backgroundColor: 'rgb(243,66,45)',
    borderTopLeftRadius: sizes(30),
    borderTopRightRadius: sizes(30),
    paddingHorizontal: spacing(2.5),
    paddingVertical: spacing(6),
  },
  bottom_title: {
    fontSize: _font_xxl,
    fontWeight: '600',
    color: '#fff',
  },
  bottom_desc: {
    fontSize: _font_md,
    color: '#fff',
    marginVertical: spacing(2),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {},
});
