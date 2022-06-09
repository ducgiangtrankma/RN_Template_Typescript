import React, {FC, useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SvgIcon} from '@components';
import {sizes} from '@utils';
interface SearchInputProps {
  onChangeInput: (value: string) => void;
}
export const SearchInput: FC<SearchInputProps> = ({...props}) => {
  const changeTimeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onChangeValue = (value: string) => {
    if (changeTimeOut.current) {
      clearTimeout(changeTimeOut.current);
    }
    changeTimeOut.current = setTimeout(() => {
      if (value === '') {
        return;
      }
      props.onChangeInput(value);
    }, 300);
  };
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={value => onChangeValue(value)}
        placeholder="Input value search..."
        placeholderTextColor="#909090"
        clearButtonMode="always"
        {...props}
      />
      <SvgIcon name="search1" type="AntDesign" size={sizes._22sdp} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f6f6f6',
  },
  input: {
    flex: 1,
    color: '#333',
  },
  searchIcon: {
    width: sizes._24sdp,
    height: sizes._24sdp,
  },
});
