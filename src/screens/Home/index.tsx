import {DefaultText} from '@components';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <DefaultText i18nKey="TabBar.home" />
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
