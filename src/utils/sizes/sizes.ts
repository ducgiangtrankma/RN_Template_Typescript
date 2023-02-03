import {Dimensions, Platform, NativeModules} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {StatusBarManager} = NativeModules;
export const _screen_width = Dimensions.get('window').width;
export const _screen_height = Dimensions.get('window').height;
export const _screen_statusbar_height = StatusBarManager.HEIGHT;
const width = _screen_width < _screen_height ? _screen_width : _screen_height;
const isTablet = DeviceInfo.isTablet();
export const _getSize = (value: number) => {
  return isTablet
    ? value
    : (value * width) / (Platform.OS === 'ios' ? 375 : 400);
};

export const spacing = (unit: number) => {
  return _getSize(unit * 8);
};

export const sizes = (value: number) => {
  return _getSize(value);
};

export const _font_xs = sizes(12);
export const _font_sm = sizes(14);
export const _font_md = sizes(16);
export const _font_lg = sizes(18);
export const _font_xl = sizes(22);
export const _font_xxl = sizes(30);
export const _font_xxxl = sizes(40);
