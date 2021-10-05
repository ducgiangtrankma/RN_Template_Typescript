import {DefaultText, PageLoading, PageContainer} from '@components';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '@src/themes';

interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  return (
    <PageContainer style={styles.container}>
      <DefaultText style={{fontFamily: fonts.bold}} i18nKey="TabBar.home" />
      <PageLoading />
    </PageContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
