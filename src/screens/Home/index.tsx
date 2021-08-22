import {DefaultText, PageLoading, PageContainer} from '@components';
import React, {FC, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {fonts} from '@src/themes';
import {exampleApi} from '@src/api';
import {dispatch} from '@common';
import {getUser} from '@saga/authSaga';
interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  const getList = useCallback(async () => {
    const res = await exampleApi.getListUser();
    console.log(res);
  }, []);
  const sagaGet = useCallback(async () => {
    dispatch(getUser());
  }, []);
  return (
    <PageContainer style={styles.container}>
      <DefaultText style={{fontFamily: fonts.bold}} i18nKey="TabBar.home" />
      <PageLoading />
      <TouchableOpacity onPress={getList}>
        <Text>Get</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sagaGet}>
        <Text>Saga Get</Text>
      </TouchableOpacity>
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
