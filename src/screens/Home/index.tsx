import {DefaultText, PageLoading, PageContainer} from '@components';
import React, {FC, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '@src/themes';
import {exampleApi} from '@src/api';
interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  console.log('Render home');
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await exampleApi.getAll();
        console.log('Base call', res);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
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
