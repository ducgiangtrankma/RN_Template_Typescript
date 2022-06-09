import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {SearchInput} from '@components';
import {sizes} from '@utils';
interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  onChangeInput: (value: string) => void;
}
export const SearchModal: FC<SearchModalProps> = ({...props}) => {
  return (
    <Modal visible={props.visible} transparent animationType="fade">
      <View style={styles.content}>
        <SafeAreaView />
        <SearchInput
          onChangeInput={(value: string) => props.onChangeInput(value)}
        />
      </View>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={props.onClose}
      />
    </Modal>
  );
};
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    height: sizes._100sdp,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
