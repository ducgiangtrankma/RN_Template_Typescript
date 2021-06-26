import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';
interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};
