import {PageContainer} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {spacing} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SegmentedButtons, useTheme} from 'react-native-paper';
interface CMSScreenProps {}
export const CMSScreen: FC<CMSScreenProps> = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();
  const [tab, setTab] = useState('channel');
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {};

  return (
    <PageContainer style={styles.container}>
      <View style={styles.header}>
        <SegmentedButtons
          style={styles.tabs}
          value={tab}
          onValueChange={setTab}
          buttons={[
            {
              value: 'game',
              label: 'Game',
              showSelectedCheck: true,
            },
            {
              value: 'channel',
              label: 'Channel',
              showSelectedCheck: true,
            },
          ]}
        />
      </View>
    </PageContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    paddingTop: spacing(3),
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: spacing(3),
  },
  tabs: {
    marginHorizontal: spacing(5),
  },
});
