import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';
interface SettingProps {}
export const Setting: FC<SettingProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>Setting Screen</Text>
    </SafeAreaView>
  );
};
