import {dispatch} from '@common';
import {DefaultText, PageLoading, PageContainer, SvgIcon} from '@components';
import {APP_SCREEN} from '@navigation/ScreenTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {channelAPI} from '@src/api';
import {userAPI} from '@src/api/features/user';
import InfiniteList from '@src/components/InfiniteList';
import {Channel, User} from '@src/model';
import {onLogout} from '@reducer/appReducer';
import {MODEL_TYPE} from '@src/model/faker';
import {
  sizes,
  spacing,
  _font_lg,
  _font_md,
  _font_sm,
  _font_xl,
  _screen_height,
  _screen_width,
} from '@utils';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton, useTheme} from 'react-native-paper';
interface ProfileScreenProps {}
export const ProfileScreen: FC<ProfileScreenProps> = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    userAPI.getMe().then(setUser);
  };
  if (user == null) {
    return <PageLoading />;
  }

  const logout = () => {
    dispatch(onLogout());
  };
  const {youtube_channel, played_games} = user || ({} as Channel);

  return (
    <PageContainer loading={user == null} style={styles.container}>
      <View style={styles.header}>
        <View
          style={[styles.avatarContainer, {borderColor: theme.colors.primary}]}>
          <Image
            source={{uri: youtube_channel.avatar.url}}
            style={styles.avatar}
          />
        </View>
        <Text style={[styles.channelTitle, {color: theme.colors.primary}]}>
          {youtube_channel.title}
        </Text>
        <Text style={[styles.channelLink, {color: '#999'}]}>
          {youtube_channel.link}
        </Text>
        <IconButton
          onPress={logout}
          icon="logout"
          size={sizes(30)}
          style={styles.logout}
          iconColor={'#999'}
        />
      </View>
      <LinearGradient
        colors={[theme.colors.secondary, '#fff']}
        start={{x: 0.5, y: -0.3}}
        end={{x: 0.5, y: 1}}
        style={styles.content}>
        <Text style={styles.gamesTitle}>Played quizzes</Text>
        <InfiniteList
          type={MODEL_TYPE.GAME}
          data={played_games}
          horizontal
          itemStyle={{
            marginHorizontal: spacing(1),
          }}
          style={styles.games}
        />
      </LinearGradient>
    </PageContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    paddingTop: spacing(5),
  },
  logout: {
    position: 'absolute',
    top: spacing(0),
    right: spacing(0),
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: spacing(4),
  },
  avatarContainer: {
    borderRadius: spacing(3),
    borderWidth: spacing(0.3),
    overflow: 'hidden',
  },
  avatar: {
    width: _screen_width / 3.5,
    height: _screen_width / 3.5,
    resizeMode: 'stretch',
  },
  channelTitle: {
    fontSize: _font_xl,
    fontWeight: '700',
    marginTop: spacing(2),
  },
  channelLink: {
    fontSize: _font_md,
    fontWeight: '600',
    marginTop: spacing(0.5),
    textDecorationLine: 'underline',
  },
  content: {
    flex: 1,
    borderTopLeftRadius: spacing(4),
    borderTopRightRadius: spacing(4),
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(2),
  },
  gamesTitle: {
    fontSize: _font_xl,
    color: '#fff',
    fontWeight: '600',
  },
  games: {
    marginTop: spacing(3),
  },
});
