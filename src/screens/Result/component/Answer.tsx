import {sizes, spacing, _font_lg, _font_md} from '@utils';
import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
interface AnswerProps {
  answer: string;
}
const Answer: FC<AnswerProps> = ({answer}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: 'rgb(187,194,228)'}]}>
      <View
        style={[
          styles.indexContainer,
          {backgroundColor: theme.colors.primary},
        ]}>
        <Text style={styles.index}>{answer}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: sizes(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing(1),
    marginTop: spacing(3),
    paddingHorizontal: spacing(1.5),
  },
  indexContainer: {
    width: sizes(40),
    height: sizes(40),
    borderRadius: sizes(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  index: {
    fontSize: _font_lg,
    color: '#fff',
  },
});

export default Answer;
