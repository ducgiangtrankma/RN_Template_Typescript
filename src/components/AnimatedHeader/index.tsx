import React, {FC, useEffect, useRef} from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchInput, SvgIcon} from '@components';
import {sizes, _screen_width} from '@utils';
interface AnimatedHeaderProps {
  categories: Array<any>;
  activeCategory: number;
  onChangeCategory: (categoryId: number) => void;
  animationStyle: any;
}
const CATEGORY_BUTTON_WIDTH = _screen_width / 5;
export const AnimatedHeader: FC<AnimatedHeaderProps> = ({...props}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Scroll to position of active category.
    scrollViewRef?.current?.scrollTo({
      x: props.activeCategory * CATEGORY_BUTTON_WIDTH,
      y: 0,
      animated: false,
    });
  }, [props.activeCategory, scrollViewRef]);
  return (
    <Animated.View style={[styles.container, props.animationStyle]}>
      <SafeAreaView />
      <View style={styles.upperRow}>
        <TouchableOpacity>
          <SvgIcon
            name="left"
            type="AntDesign"
            size={sizes._22sdp}
            style={{color: '#000'}}
          />
        </TouchableOpacity>

        <SearchInput onChangeInput={value => console.log(value)} />

        <TouchableOpacity>
          <SvgIcon
            name="more-horizontal"
            type="Feather"
            size={sizes._22sdp}
            style={{color: '#000'}}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {props.categories.map(({id, name}, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.onChangeCategory(index)}
              key={id}>
              <Text
                style={[
                  styles.categoryname,
                  index === props.activeCategory
                    ? styles.activeCategoryName
                    : null,
                ]}>
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingTop: 16,
    backgroundColor: 'white',
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 8,
  },
  backIcon: {
    width: 36,
    height: 36,
  },
  moreIcon: {
    height: 36,
    width: 36,
  },
  categoryname: {
    margin: 16,
    color: '#333',
    fontSize: 13,
  },
  activeCategoryName: {
    color: '#21B358',
    fontWeight: 'bold',
  },
});
