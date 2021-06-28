import React, {FC} from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {DefaultText} from '@components';
import {useNavigation} from '@react-navigation/native';
import {APP_SCREEN} from '@navigation/ScreenTypes';

interface SettingProps {}
export const Setting: FC<SettingProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(APP_SCREEN.DETAIL)}>
        <DefaultText i18nKey="btn-settingLanguage" />
      </TouchableOpacity>
      <DefaultText i18nKey={'hello'} />
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
