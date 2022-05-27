import {DefaultText, PageLoading, PageContainer, SvgIcon} from '@components';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, Easing, StyleSheet, View, Animated} from 'react-native';
import {fonts} from '@src/themes';
import {sizes} from '@utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
const heightSC = Dimensions.get('screen').height;
const animationEndY = Math.ceil(heightSC * 0.8);
const negativeEndY = animationEndY * -1;
interface HomeProps {}
interface HeartState {
  id: number;
  right: number;
}
const getRandomRight = (min: number, max: number) => {
  return Math.random() * (max - min);
};
let heartCount = 1;
export const Home: FC<HomeProps> = ({}) => {
  const [listHeart, setListHeart] = useState<HeartState[]>([]);
  const addHeart = () => {
    setListHeart([
      ...listHeart,
      {
        id: heartCount,
        right: getRandomRight(0, 150),
      },
    ]);
  };
  useEffect(() => {
    heartCount = heartCount + 1;
  }, [listHeart]);
  const removeHeart = (id: number) => {
    const newList = listHeart.filter(e => e.id !== id);
    setListHeart(newList);
  };
  return (
    <PageContainer style={styles.container}>
      {/* <DefaultText style={{fontFamily: fonts.bold}} i18nKey="TabBar.home" />
      <PageLoading /> */}
      {listHeart.map((e: HeartState) => {
        return (
          <HeartComp
            key={e.id}
            style={{right: e.right}}
            onComplete={() => removeHeart(e.id)}
          />
        );
      })}
      <TouchableOpacity onPress={addHeart} style={styles.addButton}>
        <SvgIcon type="AntDesign" name="plus" size={sizes._20sdp} />
      </TouchableOpacity>
    </PageContainer>
  );
};
const HeartComp = (props: any) => {
  const position = useRef(new Animated.Value(0)).current;
  const yAnimation = position.interpolate({
    inputRange: [negativeEndY, 0],
    outputRange: [animationEndY, 0],
  });
  const opacityAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY],
    outputRange: [1, 0],
  });
  const scaleAnimation = yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.4, 1],
    extrapolate: 'clamp',
  });
  useEffect(() => {
    Animated.timing(position, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [position]);
  return (
    <Animated.View
      {...props}
      style={[
        styles.heartContainer,
        props.style,
        {
          transform: [{translateY: position}, {scale: scaleAnimation}],
          opacity: opacityAnimation,
        },
      ]}>
      <SvgIcon
        name="heart"
        type="AntDesign"
        size={sizes._52sdp}
        style={{color: '#EF5350'}}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    marginTop: heightSC - 150,
    left: 30,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 30,
  },
  heart: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
