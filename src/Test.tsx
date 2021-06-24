import * as React from 'react';
import {FC, useState, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
interface TestProps {
  value?: string;
}
interface myData {
  id: number;
  key: string;
}
export const Test: FC<TestProps> = ({...props}) => {
  const [listSelected, setListSelected] = useState<myData[]>([]);
  const selectItem = useCallback(
    async (item: myData) => {
      const index = listSelected.findIndex(v => v.id === item.id);
      const newSelected = [...listSelected];
      if (index === -1) {
        newSelected.push(item);
      } else {
        newSelected.splice(index, 1);
      }
      setListSelected(newSelected);
    },
    [listSelected],
  );
  const getCheckIcon = useCallback(
    (item: myData) => {
      const isSelected = listSelected.some(v => v.id === item.id);
      return <Text>{isSelected ? 'Chọn' : 'Không chọn'}</Text>;
    },
    [listSelected],
  );
  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity onPress={() => selectItem(item)} style={styles.item}>
          <Text>{item.key}</Text>
          {getCheckIcon(item)}
        </TouchableOpacity>
      );
    },
    [getCheckIcon, selectItem],
  );
  const keyExtractor = useCallback((item, index) => `${index}`, []);

  return (
    <SafeAreaView>
      <Text>{props.value}</Text>
      <Icon name="upcircleo" size={24} />
      <FlatList<myData>
        data={data}
        extraData={data}
        keyExtractor={keyExtractor}
        renderItem={item => renderItem(item)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 30,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
const data = [
  {
    id: 1,
    key: 'optional 1',
  },
  {
    id: 2,
    key: 'optional 2',
  },
  {
    id: 3,
    key: 'optional 3',
  },
  {
    id: 4,
    key: 'optional 4',
  },
];
