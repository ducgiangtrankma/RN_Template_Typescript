import React, {FC, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
  ImageResizeMode,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '@reducer/languageReducer';
import {_screen_height, _screen_statusbar_height} from '@utils';
import {scale} from '@common';
import {images} from '@assets/images';

interface Props {
  bannerURl: ImageSourcePropType;
  imgBannerStyle: StyleProp<ImageStyle>;
  bannerResizeMode: ImageResizeMode;
}
export const StickyHeader: FC<Props> = ({
  bannerURl,
  imgBannerStyle,
  bannerResizeMode,
}) => {
  const dispatch = useDispatch();
  const curY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(curY, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 2000,
    }).start();
  }, [curY]);
  const headerDistance = curY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            opacity: headerDistance,
          },
        ]}>
        <View>
          <View style={{height: _screen_statusbar_height}} />
          <View style={styles.headerContent}>
            <Text>Header Title</Text>
          </View>
        </View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: curY},
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        style={styles.container}>
        <Image
          source={bannerURl ?? images.banner}
          style={[styles.imgBanner, imgBannerStyle]}
          resizeMode={bannerResizeMode ?? 'cover'}
        />
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => dispatch(changeLanguage('en'))}>
            <Text>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(changeLanguage('vi'))}>
            <Text>VI</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: _screen_statusbar_height,
    paddingBottom: _screen_height * 0.8,
  },
  headerContent: {
    height: scale(55),
    width: '100%',
    backgroundColor: 'red',
  },
  imgBanner: {height: scale(311), width: '100%'},
});
