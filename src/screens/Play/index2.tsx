import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import data from './data.json';

const GAME_STATE = {
  START: -1,
  QUIZ_PLAY: 0,
  QUIZ_END: 1,
  GAME_END: 2,
};

const ANSWER_STATE = {
  NORMAL: 0,
  CORRECT: 1,
  WRONG: 2,
  SELECTED: 3,
};

const Answer = ({label, onPress, state, progress}) => {
  const colors = {
    [ANSWER_STATE.NORMAL]: 'rgb(0,0,0)',
    [ANSWER_STATE.SELECTED]: 'rgba(254, 176, 36, 0.4)',
    [ANSWER_STATE.CORRECT]: 'rgb(254, 176, 36)',
    [ANSWER_STATE.WRONG]: 'rgba(255,0,0, 0.5)',
  };

  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{scale}],
        flex: 1,
        height: 120,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          backgroundColor: colors[state],
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Text
          style={{
            fontSize: 50,
            color: '#fff',
          }}>
          {' '}
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
interface PlayScreenProps {}
const PlayScreen: FC<PlayScreenProps> = () => {
  const playerRef = useRef(null);

  const {start_time, quiz_play_time, quiz_end_time, quizzes} = data;
  const [index, setIndex] = useState(-1);

  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [state, setState] = useState(GAME_STATE.START);

  const startAnimation = useRef(new Animated.Value(0)).current;
  const onStateChange = useCallback(state => {}, []);

  useEffect(() => {
    setTimeout(() => {
      playerRef?.current?.seekTo(20);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const ms = Math.floor(await playerRef.current?.getCurrentTime()); // this is a promise. dont forget to await
      // calculations
      if (ms <= start_time) return;
      const ms_play = ms - start_time;
      const quiz_time = quiz_end_time + quiz_play_time;

      const cur_index = Math.floor(ms_play / (quiz_end_time + quiz_play_time));
      if (cur_index == quizzes.length - 1) {
        console.log('end game');
        setState(GAME_STATE.GAME_END);
        clearInterval(interval);
      } else if (index != cur_index) {
        // new answer:
        console.log('new answer');
        Animated.sequence([
          Animated.timing(startAnimation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(startAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
        setState(GAME_STATE.QUIZ_PLAY);
        setIndex(cur_index);
        setUserAnswer(null);
      } else if (ms_play == index * quiz_time + quiz_play_time) {
        // end answer:
        setState(GAME_STATE.QUIZ_END);
        endAnswer();
      }
    }, 1000); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, [index, userAnswer, state]);

  const answer = index => {
    console.log(' on anser : ', index, userAnswer);
    if (userAnswer != undefined) return;
    setUserAnswer(index);
  };

  const endAnswer = () => {
    if (index == quizzes[index].answer) {
      setScore(score + 10);
    }
  };
  const {width} = Dimensions.get('window');

  const getAnswerState = i => {
    if (state != GAME_STATE.QUIZ_END) {
      return i == userAnswer ? ANSWER_STATE.SELECTED : ANSWER_STATE.NORMAL;
    }
    if (i == quizzes[index].answer) return ANSWER_STATE.CORRECT;
    if (i == userAnswer) return ANSWER_STATE.WRONG;
    return ANSWER_STATE.NORMAL;
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
      }}>
      <View pointerEvents="none">
        <YoutubePlayer
          height={(width / 16) * 9}
          play={false}
          ref={playerRef}
          initialPlayerParams={{
            controls: false,
            preventFullScreen: true,
          }}
          // videoId={'fHNWsor2Jro'}
          onChangeState={onStateChange}
          playbackRate={1.5}
        />
      </View>
      {state == GAME_STATE.START ? (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              marginTop: 40,
            }}>
            Start
          </Text>
        </View>
      ) : state == GAME_STATE.GAME_END ? (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              marginTop: 40,
            }}>
            End
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              marginTop: 20,
            }}>{`Score: ${score}`}</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              marginTop: 100,
            }}>{`Quiz ${index + 1}`}</Text>

          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              marginTop: 20,
            }}>{`Score: ${score}`}</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <FlatList
              data={[0, 1, 2, 3]}
              keyExtractor={(item, index) => index + ''}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <Answer
                  label={['A', 'B', 'C', 'D'][index]}
                  selected={userAnswer == index}
                  onPress={() => answer(index)}
                  state={getAnswerState(index)}
                  progress={startAnimation}
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default PlayScreen;
