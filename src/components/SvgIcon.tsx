import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {sizes} from '../utils/sizes';

export type IconType =
  | 'Feather'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome5Solid'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export interface SvgIconProps {
  type: IconType;
  size: number;
  name: string;
  style?: StyleProp<TextStyle>;
}

export const SvgIcon: React.FunctionComponent<SvgIconProps> = props => {
  switch (props.type) {
    case 'Feather':
      return (
        <Feather
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'FontAwesome5':
    case 'FontAwesome5Solid':
      return (
        <FontAwesome5
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
          solid={props.type === 'FontAwesome5Solid'}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          name={props.name}
          size={props.size || sizes._20sdp}
          style={props.style}
        />
      );
    default:
      return null;
  }
};
