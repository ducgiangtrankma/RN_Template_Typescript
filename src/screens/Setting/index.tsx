import React, {FC} from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {DefaultText, globalLoading, globalMessage} from '@components';
import {useNavigation} from '@react-navigation/native';
import {APP_SCREEN} from '@navigation/ScreenTypes';

interface SettingProps {}
export const Setting: FC<SettingProps> = ({}) => {
  const navigation = useNavigation();
  const globalRunning = () => {
    globalLoading.show();
    setTimeout(() => {
      globalLoading.hide();
    }, 1000);
  };
  const globalMessageRunning = () => {
    globalMessage.show('Title', 'Message');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(APP_SCREEN.DETAIL, {item: 'a'})}>
        <DefaultText i18nKey="btn-settingLanguage" />
      </TouchableOpacity>
      <DefaultText i18nKey={'hello'} />
      <TouchableOpacity onPress={globalRunning}>
        <Text>Global Loading</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={globalMessageRunning}>
        <Text>Global Message </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
