import {channelAPI, gameApi} from '@src/api';
import {Channel, Game} from '@src/model';
import {MODEL_TYPE} from '@src/model/faker';
import {Model} from '@src/model/model';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import ChannelCard from '../ChannelCard';
import GameCard from '../GameCard';

interface InfiniteListProps {
  type: MODEL_TYPE;
  data?: Model[];
  horizontal?: boolean;
  itemStyle?: any;
  style?: any;
  snapToInterval?: number;
}
const InfiniteList: FC<InfiniteListProps> = ({
  type,
  data,
  horizontal,
  itemStyle,
  style,
  snapToInterval,
}) => {
  const [list, setList] = useState<Model[]>();

  useEffect(() => {
    if (data != null) {
      setList(data);
    } else {
      getList();
    }
  }, [type]);

  const getList = () => {
    if (type == MODEL_TYPE.GAME) {
      gameApi.getAll().then(setList);
    } else if (type == MODEL_TYPE.CHANNEL) {
      channelAPI.getAll().then(setList);
    }
  };

  const renderRow = (data: Model) => {
    switch (type) {
      case MODEL_TYPE.GAME:
        return <GameCard game={data as Game} />;
      case MODEL_TYPE.CHANNEL:
        return <ChannelCard channel={data as Channel} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        ...style,
      }}>
      <FlatList
        data={list}
        style={{
          flex: 1,
          alignSelf: 'stretch',
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal == true}
        keyExtractor={(item, index) => index + ''}
        snapToInterval={snapToInterval}
        decelerationRate="fast"
        renderItem={({item, index}) => (
          <View style={itemStyle ? itemStyle : {}}>{renderRow(item)}</View>
        )}
      />
    </View>
  );
};

export default InfiniteList;
