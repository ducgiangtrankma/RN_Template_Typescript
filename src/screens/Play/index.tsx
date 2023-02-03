import {APP_SCREEN} from '@navigation/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {
  sizes,
  spacing,
  _font_xl,
  _font_xxl,
  _screen_height,
  _screen_width,
} from '@utils';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import Answer from './component/Answer';

interface PlayScreenProps {}
export const PlayScreen: FC<PlayScreenProps> = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const onQuit = () => {
    navigation.goBack();
  };

  const goResult = () => {
    navigation.navigate(APP_SCREEN.RESULT);
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
      <View style={[styles.header]}>
        <View
          style={[styles.header_layer, {backgroundColor: theme.colors.primary}]}
        />
        <Text style={styles.title}>{`Question 1/2`}</Text>
        <View
          style={[
            styles.timeContainer,
            {backgroundColor: theme.colors.primary},
          ]}>
          <Text style={styles.time}>15</Text>
        </View>
      </View>
      <View style={[styles.content, {backgroundColor: '#fff'}]}>
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={300}
            videoId={'82BRDUuB1h0'}
            initialPlayerParams={{
              controls: false,
            }}
            playbackRate={1.5}
          />
        </View>
        <View style={styles.answers}>
          {[1, 2, 3].map((item, index) => (
            <Answer answer={index + ''} key={index + ''} />
          ))}
        </View>
        <View style={styles.bottom}>
          <Button icon="close" mode="outlined" onPress={onQuit}>
            Quit
          </Button>
          <View style={styles.statistics}>
            <Button
              onPress={goResult}
              mode="contained-tonal"
              icon="heart"
              buttonColor={theme.colors.primary}
              style={styles.button}
              textColor="#fff">
              0
            </Button>
            <Button
              mode="contained-tonal"
              icon="close-circle"
              buttonColor={theme.colors.error}
              style={styles.button}
              textColor="#fff">
              1
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40,
    overflow: 'hidden',
  },
  header_layer: {
    width: _screen_height,
    height: _screen_height + sizes(40),
    borderRadius: _screen_height / 2,
    position: 'absolute',
    zIndex: -1,
    left: -_screen_height / 2 - 60,
    top: -90,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: spacing(5),
    paddingHorizontal: spacing(3),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: _font_xxl,
    color: '#fff',
    fontWeight: '800',
  },
  timeContainer: {
    width: sizes(50),
    height: sizes(50),
    borderRadius: spacing(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: _font_xl,
    color: '#fff',
    fontWeight: '700',
  },
  content: {
    flexDirection: 'column',
    padding: spacing(3.5),
    borderTopLeftRadius: spacing(4),
    borderTopRightRadius: spacing(4),
    flex: 1,
  },
  videoContainer: {
    borderRadius: spacing(3.5),
    overflow: 'hidden',
    height: ((_screen_width - spacing(7)) / 16) * 9,
  },
  answers: {
    paddingVertical: spacing(3),
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: spacing(0.5),
  },
  statistics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
