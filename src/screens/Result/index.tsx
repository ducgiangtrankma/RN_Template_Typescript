import {images} from '@assets/images';
import {APP_SCREEN} from '@navigation/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {
  sizes,
  spacing,
  _font_sm,
  _font_xl,
  _font_xxxl,
  _screen_width,
} from '@utils';
import Lottie from 'lottie-react-native';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, IconButton, useTheme} from 'react-native-paper';

interface ResultScreenProps {}
export const ResultScreen: FC<ResultScreenProps> = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const onQuit = () => {
    navigation.goBack();
  };

  const goReview = () => {
    navigation.navigate(APP_SCREEN.REVIEW);
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.header, {borderBottomColor: theme.colors.primary}]}>
        <Text style={[styles.headerTitle, {color: theme.colors.primary}]}>
          Quiz result
        </Text>
        <IconButton
          icon={'share'}
          style={styles.btnShare}
          iconColor={theme.colors.primary}
          size={sizes(30)}
        />
      </View>
      <View style={[styles.content, {backgroundColor: '#fff'}]}>
        <Text style={[styles.contentTitle, {color: theme.colors.primary}]}>
          Nice try <Text style={[styles.username]}>Eric the web</Text>
        </Text>
        <Text style={[styles.scoreValue, {color: theme.colors.tertiary}]}>
          1/1
        </Text>
        <Text style={[styles.scoreLabel, {color: theme.colors.primary}]}>
          correct answers
        </Text>
        <Lottie style={styles.image} source={images.winning} autoPlay loop />
      </View>
      <View style={styles.bottom}>
        <Button
          icon="check-all"
          style={styles.button}
          mode="contained"
          onPress={goReview}
          labelStyle={styles.labelButton}>
          Review
        </Button>
        <Button
          icon="play"
          style={styles.button}
          mode="contained"
          labelStyle={styles.labelButton}>
          Play again
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: sizes(40),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing(4),
    paddingLeft: spacing(3),
    justifyContent: 'space-between',
    borderBottomWidth: sizes(1),
  },
  headerTitle: {
    fontSize: _font_xl,
    fontWeight: '800',
  },
  btnShare: {},
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: spacing(3),
  },
  contentTitle: {
    fontSize: _font_xl,
  },
  username: {
    fontWeight: '800',
  },
  scoreValue: {
    fontWeight: '700',
    fontSize: _font_xxxl,
    marginTop: spacing(3),
  },
  scoreLabel: {
    fontSize: _font_sm,
    textTransform: 'uppercase',
    marginTop: spacing(1.5),
  },
  image: {
    height: _screen_width * 0.7,
    aspectRatio: 1,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: spacing(8),
    paddingHorizontal: spacing(5),
  },
  button: {},
  labelButton: {
    color: '#fff',
  },
});
