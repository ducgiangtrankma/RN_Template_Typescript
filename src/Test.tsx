import * as React from 'react';
import {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
interface TestProps {
  value?: string;
}
export const Test: FC<TestProps> = ({...props}) => {
  return (
    <SafeAreaView>
      <Text>{props.value}</Text>
    </SafeAreaView>
  );
};
