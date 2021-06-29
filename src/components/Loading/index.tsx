/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

export const PageLoading: React.FunctionComponent<{children?: string}> = ({
  children,
}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          height: 60,
          justifyContent: 'center',
        }}>
        <LottieView
          style={{height: 150, paddingTop: 4}}
          autoPlay
          loop
          source={require('../../assets/lotties/loading-state.json')}
        />
      </View>
      {children && (
        <Text
          style={{
            textAlign: 'center',
          }}>
          {children}
        </Text>
      )}
    </View>
  );
};
