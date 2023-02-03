import {PageLoading} from '@components';
import {APP_SCREEN} from '@navigation/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {gameApi} from '@src/api';
import {Game} from '@src/model';
import {
  sizes,
  spacing,
  _font_lg,
  _font_md,
  _font_sm,
  _font_xl,
  _font_xxl,
  _screen_height,
  _screen_width,
} from '@utils';
import React, {useState, useCallback, useEffect, useRef, FC} from 'react';
import {
  View,
  Alert,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Button, IconButton, useTheme} from 'react-native-paper';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import Quiz from './component/Quiz';
import Answer from './component/Quiz';

interface PlayScreenProps {}
const ReviewScreen: FC<PlayScreenProps> = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const theme = useTheme();
  const navigation = useNavigation();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    gameApi.getDetail('123').then(setGame);
  }, []);

  const onQuit = () => {
    navigation.goBack();
  };

  const goPlay = () => {
    navigation.navigate(APP_SCREEN.PLAY);
  };
  if (game == null) {
    return <PageLoading />;
  }
  const {quizzes} = game;
  console.log('quizz: ', JSON.stringify(game, null, 2));
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
      <View style={[styles.header]}>
        <View
          style={[styles.header_layer, {backgroundColor: theme.colors.primary}]}
        />
        <Text style={styles.title}>{`Correct answers:`}</Text>
        <View
          style={[
            styles.resultContainer,
            {backgroundColor: theme.colors.primary},
          ]}>
          <Text style={styles.result}>1/12</Text>
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
        <View style={styles.quizzes}>
          <FlatList
            data={quizzes}
            keyExtractor={(item, index) => index + ''}
            numColumns={3}
            style={{
              flex: 1,
            }}
            renderItem={({item, index}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Quiz
                  correct={index % 4 != 0}
                  selected={quizIndex == index}
                  onPress={() => setQuizIndex(index)}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.bottom}>
          <Button
            icon="play"
            mode="contained"
            onPress={goPlay}
            labelStyle={styles.buttonLabel}
            textColor="#fff">
            Play again
          </Button>
          <View style={styles.statistics}>
            <IconButton
              mode="outlined"
              icon="skip-previous"
              onPress={() =>
                setQuizIndex(
                  quizIndex == 0 ? quizzes.length - 1 : quizIndex - 1,
                )
              }
              style={styles.button}
            />
            <Text style={styles.quizIndex}>{quizIndex + 1}</Text>
            <IconButton
              mode="outlined"
              icon="skip-next"
              style={styles.button}
              onPress={() =>
                setQuizIndex(
                  quizIndex == quizzes.length - 1 ? 0 : quizIndex + 1,
                )
              }
            />
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
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: _font_xl,
    color: '#fff',
    fontWeight: '800',
  },
  resultContainer: {
    width: sizes(70),
    height: sizes(50),
    borderRadius: spacing(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: _font_xl,
    color: '#fff',
    fontWeight: '700',
  },
  quizIndex: {
    fontSize: _font_xxl,
    fontWeight: '700',
    marginHorizontal: spacing(2),
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
  quizzes: {
    paddingVertical: spacing(1),
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: spacing(5),
  },
  button: {
    marginHorizontal: spacing(0.5),
  },
  statistics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: _font_sm,
    color: '#fff',
    fontWeight: '500',
  },
});
export default ReviewScreen;
