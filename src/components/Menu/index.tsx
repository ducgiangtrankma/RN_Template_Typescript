import {CategoryPositions} from '@screens';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface MenuProps {
  title: string;
  categoryPositions: CategoryPositions;
  setCategoryPositions: (positions: number[]) => void;
  children: React.ReactNode;
}
export const Menu: FC<MenuProps> = ({...props}) => {
  return (
    <View
      style={styles.container}
      onLayout={event => {
        const {y} = event.nativeEvent.layout;
        props.setCategoryPositions(
          [...props.categoryPositions, y].sort(function (a, b) {
            return a - b;
          }),
        );
      }}>
      <Text style={styles.title}>{props.title}</Text>
      <View>{props.children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#222222',
  },
});
