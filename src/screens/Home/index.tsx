import {PageContainer} from '@components';
import {userAPI} from '@src/api/features/user';
import InfiniteList from '@src/components/InfiniteList';
import {User} from '@src/model';
import {MODEL_TYPE} from '@src/model/faker';
import {sizes, spacing, _font_xl, _screen_height} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SegmentedButtons, useTheme} from 'react-native-paper';
interface HomeScreenProps {}
export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const [user, setUser] = useState<User | null>(null);
  const [tab, setTab] = useState('all');
  const theme = useTheme();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    userAPI.getMe().then(setUser);
  };

  return (
    <PageContainer
      style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
      <View style={styles.header}>
        <View style={[styles.layer, {backgroundColor: theme.colors.primary}]} />
        {user && (
          <>
            {/* <View
              style={[
                styles.avatarContainer,
                {borderColor: theme.colors.primary},
              ]}>
              <Image
                source={{uri: user.youtube_channel.avatar.url}}
                style={styles.avatar}
              />
            </View> */}

            <Text style={[styles.username, {color: '#fff'}]}>
              {`Hi! ${user.youtube_channel.title}`}
            </Text>
          </>
        )}
      </View>
      <View style={styles.content}>
        <SegmentedButtons
          style={styles.tabs}
          value={tab}
          onValueChange={setTab}
          buttons={[
            {
              value: 'all',
              label: 'All',
              showSelectedCheck: true,
            },
            {
              value: 'played',
              label: 'Played',
              showSelectedCheck: true,
            },
            {
              value: 'like',
              label: 'Like',
              showSelectedCheck: true,
            },
          ]}
        />
        <InfiniteList
          style={styles.list}
          type={MODEL_TYPE.GAME}
          itemStyle={styles.item}
        />
      </View>
    </PageContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: spacing(4),
    marginHorizontal: spacing(2),
  },
  layer: {
    width: _screen_height,
    height: _screen_height + sizes(40),
    borderRadius: _screen_height / 2,
    position: 'absolute',
    zIndex: -1,
    left: -_screen_height / 2 - 60,
    top: -90,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: spacing(4),
    borderTopRightRadius: spacing(4),
    paddingVertical: spacing(3),
  },
  tabs: {
    marginHorizontal: spacing(6),
  },
  logo: {
    width: sizes(300),
    height: sizes(50),
    resizeMode: 'cover',
  },
  avatarContainer: {
    borderRadius: spacing(1),
    borderWidth: sizes(1),
    overflow: 'hidden',
  },
  avatar: {
    width: sizes(40),
    height: sizes(40),
    resizeMode: 'cover',
  },
  username: {
    fontSize: _font_xl,
    fontWeight: '700',
    marginLeft: spacing(1),
    flexWrap: 'wrap',
  },
  list: {
    marginTop: spacing(2),
  },
  item: {
    marginHorizontal: spacing(3),
    marginTop: spacing(3),
  },
});
