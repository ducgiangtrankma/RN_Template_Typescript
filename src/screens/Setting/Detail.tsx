import React, {FC, useEffect} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '@reducer/languageReducer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {APP_SCREEN, AuthenticationPramsList} from '@navigation/ScreenTypes';

interface DetailSettingProps {}
export const DetailSetting: FC<DetailSettingProps> = ({}) => {
  const dispatch = useDispatch();
  const route =
    useRoute<RouteProp<AuthenticationPramsList, APP_SCREEN.DETAIL>>();
  const navigation = useNavigation();
  const dataSend = route.params.item;
  console.log('Check route', dataSend);
  const {t} = useTranslation();
  useEffect(() => {
    navigation.setOptions({
      title: t('language'),
    });
  }, [navigation, t]);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(changeLanguage('en'))}>
        <Text>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(changeLanguage('vi'))}>
        <Text>VI</Text>
      </TouchableOpacity>
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
