import React, {useRef, FC, ReactNode} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import {sizes} from '@utils';

interface SwipeableviewProps {}
export const Swipeableview: FC<SwipeableviewProps> = ({}) => {
  const updateRef = useRef(null);
  const renderRightAction = (
    icon: ReactNode,
    color: string,
    backgroundColor: string,
    x: any,
    progress: any,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          style={[styles.rightAction, {backgroundColor: backgroundColor}]}>
          <Text>Test</Text>
        </RectButton>
      </Animated.View>
    );
  };
  const renderRightActions = (progress: any) => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 192,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'red',
          justifyContent: 'space-around',
        }}>
        {renderRightAction('menu', 'red', 'blue', 192, progress)}
        {renderRightAction('menu', 'blue', 'yellow', 128, progress)}
        {renderRightAction('menu', 'red', 'blue', 64, progress)}
      </View>
    );
  };
  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}>
      <View style={styles.itemContainer}>
        <Text>Image</Text>
      </View>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    height: sizes._55sdp,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes._16sdp,
    backgroundColor: 'gray',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 75,
  },
});
