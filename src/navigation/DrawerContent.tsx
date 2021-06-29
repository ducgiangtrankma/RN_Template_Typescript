/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {SvgIcon} from '@components';
import {sizes, _screen_statusbar_height} from '@utils';
import {images} from '@assets/images';

interface NavigationProps {
  label: string;
  location: string;
}
type DrawerSideNavigationProps = {
  sideNavigation: Array<NavigationProps>;
};

type DrawerContentProps = DrawerContentComponentProps<DrawerContentOptions> &
  DrawerSideNavigationProps;

export const DrawerContent: FunctionComponent<DrawerContentProps> = ({
  navigation,
  sideNavigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={images.avt} />
      </View>

      <DrawerContentScrollView style={{marginTop: sizes._40sdp}}>
        {sideNavigation.map((sideNav: NavigationProps) => {
          return (
            <DrawerItem
              key={sideNav.location}
              label={sideNav.label}
              labelStyle={{marginLeft: -8}}
              onPress={() => navigation.navigate(sideNav.location)}
              icon={() => (
                <SvgIcon
                  name="circle"
                  type="FontAwesome"
                  size={10}
                  style={styles.dots}
                />
              )}
            />
          );
        })}
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
        <Text>Close</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={{textAlign: 'left'}}>Duc Giang Tran</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    minWidth: '50%',
    paddingHorizontal: sizes._6sdp,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    marginTop: _screen_statusbar_height,
    height: 80,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 90,
    marginBottom: 32,
  },
  img: {
    width: sizes._120sdp,
    height: sizes._120sdp,
    borderRadius: sizes._10sdp,
    alignSelf: 'center',
  },
  dots: {
    color: '#0078CE',
  },
});
