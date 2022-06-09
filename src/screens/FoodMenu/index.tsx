/* eslint-disable react-native/no-inline-styles */
import {images} from '@assets/images';
import {SearchModal, AnimatedHeader, Menu} from '@components';
import {menuData, sizes} from '@utils';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  View,
  Platform,
  Image,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface FoodMenuProps {}
export type CategoryPositions = number[];
const HEADER_HEIGHT = 80;
export const FoodMenu: FC<FoodMenuProps> = ({}) => {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(-1);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const [categoryPositions, setCategoryPositions] = useState<CategoryPositions>(
    [],
  );
  const searchIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [1, 0],
    }),
  };
  const headerAnimation = {
    zIndex: animatedValue,
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1, 40],
          outputRange: [0, 1, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const scrollTo = (index: number) => {
    scrollViewRef?.current?.scrollTo({
      x: 0,
      y: categoryPositions[index] + HEADER_HEIGHT,
      animated: false,
    });
  };
  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    categoryPositions.forEach((position, index) => {
      if (y >= position && y < categoryPositions[index + 1]) {
        setActiveCategory(index);
        return;
      } else if (y > categoryPositions[categoryPositions.length - 1]) {
        setActiveCategory(categoryPositions.length - 1);
      }
    });
  };
  const bannerAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [-200, 0],
          outputRange: [2, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  useEffect(() => {
    console.log('Debug', categoryPositions);
    console.log('Debug ---', activeCategory);
  }, [categoryPositions, activeCategory]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => setSearchModalVisible(true)}>
        <Animated.Image
          source={images.search}
          style={[styles.searchIcon, searchIconAnimation]}
        />
      </TouchableOpacity>
      <SearchModal
        visible={searchModalVisible}
        onClose={() => setSearchModalVisible(false)}
        onChangeInput={value => console.log(value)}
      />
      <AnimatedHeader
        categories={menuData}
        animationStyle={headerAnimation}
        activeCategory={activeCategory}
        onChangeCategory={(index: number) => {
          scrollTo(index);
          setActiveCategory(index);
        }}
      />
      <Animated.View style={[styles.bannerContainer, bannerAnimation]}>
        <Image style={styles.banner} source={images.banner} />
        <LinearGradient
          style={styles.gradient}
          colors={['black', 'black', 'transparent']}
        />
      </Animated.View>

      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: animatedValue},
              },
            },
          ],
          {useNativeDriver: true, listener: event => handleScroll(event)},
        )}
        scrollEventThrottle={16}>
        <View style={styles.paddingForBanner} />

        <View style={styles.scrollViewContent}>
          <View style={styles.shopDetailsCard}>
            <View style={{height: 200}} />
          </View>

          {menuData.map(({name, id, items}) => (
            <Menu
              key={id}
              title={name}
              categoryPositions={categoryPositions}
              setCategoryPositions={setCategoryPositions}>
              {items.map(e => {
                return (
                  <View
                    style={{
                      height: sizes._45sdp,
                      backgroundColor: 'yellow',
                      marginVertical: 10,
                      justifyContent: 'center',
                      paddingHorizontal: sizes._20sdp,
                    }}>
                    <Text>{e.description}</Text>
                  </View>
                );
              })}
            </Menu>
          ))}
          <View style={{height: 16}} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};
const BANNER_HEIGHT = 224;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  checkbox: {
    width: 64,
    height: 64,
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  searchIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    zIndex: 50,
  },
  paddingForBanner: {
    height: BANNER_HEIGHT,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  shopDetailsCard: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -100,
    marginBottom: 32,
    borderRadius: 14,
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: '#d3d3d3',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  bannerContainer: {
    position: 'absolute',
    height: BANNER_HEIGHT,
    width: '100%',
  },
  gradient: {
    position: 'absolute',
    opacity: 0.3,
    width: '100%',
    height: 124,
  },
  test: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 16,
  },
});
