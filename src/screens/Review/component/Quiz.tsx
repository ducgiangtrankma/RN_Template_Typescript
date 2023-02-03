import {sizes, spacing, _font_lg, _font_md, _font_xl} from '@utils';
import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
interface QuizProps {
  correct: boolean;
  selected: boolean;
  onPress: Function;
}
const Quiz: FC<QuizProps> = ({correct, selected, onPress}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          transform: selected ? [{scale: 1.2}] : [],
          opacity: selected ? 1 : 0.7,
        },
      ]}>
      <View
        style={[
          {flex: 1, backgroundColor: theme.colors.secondary},
          correct
            ? {justifyContent: 'center', alignItems: 'center'}
            : {
                justifyContent: 'space-between',
                paddingHorizontal: spacing(2),
                flexDirection: 'row',
                alignItems: 'center',
              },
        ]}>
        <Text style={styles.correctAnswer}>1.A</Text>
        {!correct && (
          <>
            <Text style={styles.userAnswer}>B</Text>
            <View
              style={[styles.layer, {backgroundColor: theme.colors.tertiary}]}
            />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: sizes(85),
    height: sizes(40),
    flexDirection: 'row',
    borderRadius: spacing(1),
    marginTop: spacing(2),
    overflow: 'hidden',
  },
  left: {
    width: sizes(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: sizes(2),
    borderRightColor: '#fff',
  },
  index: {
    fontSize: _font_lg,
    color: '#fff',
    fontWeight: '700',
  },
  right: {},
  correctAnswer: {
    fontWeight: '600',
    color: '#fff',
    fontSize: _font_lg,
  },
  userAnswer: {
    fontWeight: '600',
    color: '#fff',
    fontSize: _font_lg,
  },
  layer: {
    zIndex: -1,
    position: 'absolute',
    width: sizes(100),
    height: sizes(60),
    top: 0,
    left: sizes(30),
    transform: [
      {
        rotate: '-75deg',
      },
    ],
  },
});

export default Quiz;
