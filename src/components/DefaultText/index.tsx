import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, StyleProp, TextStyle} from 'react-native';
interface DefaultTextProps {
  i18nKey: string;
  style?: StyleProp<TextStyle>;
}
export const DefaultText: FC<DefaultTextProps> = ({...props}) => {
  const {t} = useTranslation();
  return <Text style={props.style}>{t(props.i18nKey)}</Text>;
};
