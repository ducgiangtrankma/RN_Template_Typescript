import {scale} from '@common';
import {sizes, _screen_width} from '@utils';
import React, {useImperativeHandle, useState} from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const globalMessageRef = React.createRef<any>();
export const globalMessage = {
  show: (title: string, content: string) => {
    globalMessageRef?.current?.show(title, content);
  },
};

export interface GlobalMessageProps {
  name?: string;
}

export const GlobalMessage = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useImperativeHandle(ref, () => {
    return {show: show};
  });

  const show = (titleMess: string, contentMess: string) => {
    setVisible(true);
    setTitle(titleMess);
    setContent(contentMess);
  };

  return (
    <Modal
      style={styles.main}
      visible={visible}
      animationType={'none'}
      transparent>
      <StatusBar
        translucent
        backgroundColor={'rgba(0,0,0,0.6)'}
        barStyle={'light-content'}
      />
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.main}>
          <View style={styles.boxContent}>
            <View style={styles.content}>
              <View style={styles.title}>
                <Text style={styles.titleMess}>{title}</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.contentMess}>{content}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setVisible(false);
                }}>
                <Text>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    width: _screen_width / 1.5,
    backgroundColor: 'white',
    borderRadius: scale(sizes._15sdp),
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: scale(sizes._16sdp),
    justifyContent: 'center',
  },
  title: {
    marginVertical: scale(sizes._16sdp),
  },
  message: {
    marginBottom: scale(sizes._16sdp),
  },
  button: {
    width: scale(sizes._80sdp),
    height: scale(sizes._40sdp),
    alignItems: 'center',
  },
  titleMess: {
    fontSize: sizes._17sdp,
    fontWeight: 'bold',
  },
  contentMess: {textAlign: 'center', fontSize: sizes._15sdp},
});
