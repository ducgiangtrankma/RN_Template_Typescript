import {APP_SCREEN} from '@navigation/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {Game} from '@src/model';
import {spacing, _font_lg, _font_md} from '@utils';
import React, {FC} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';

interface GameCardProps {
  game: Game;
}
const GameCard: FC<GameCardProps> = ({game}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const {video, quizzes} = game;
  const {title, thumbnail, channel} = video || {};
  const press = () => {
    navigation.navigate(APP_SCREEN.PLAY);
  };
  const viewChannel = () => {
    navigation.navigate(APP_SCREEN.CHANNEL, {
      id: '1234',
    });
  };
  return (
    <TouchableOpacity style={[styles.container]} onPress={press}>
      <ImageBackground
        source={{uri: thumbnail?.url}}
        style={styles.thumbnail}
      />
      <View style={[styles.content, {backgroundColor: theme.colors.secondary}]}>
        <TouchableOpacity onPress={viewChannel}>
          <Text style={styles.channel}>{`Channel: ${channel?.title}`}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{`${quizzes?.length} quiz`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 240,
    borderRadius: spacing(2),
    overflow: 'hidden',
  },
  thumbnail: {
    flex: 1,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: spacing(1),
    paddingHorizontal: spacing(2),
  },
  channel: {
    fontSize: _font_md,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: _font_lg,
    color: '#fff',
    fontWeight: '600',
    marginTop: spacing(1),
  },
  caption: {
    fontSize: _font_md,
    color: '#fff',
    marginTop: spacing(1),
  },
});

export default GameCard;
