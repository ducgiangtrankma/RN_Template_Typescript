/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {PageLoading} from '@components';

export interface PageContainerProps {
  loading?: boolean;
  loadingMessage?: string;
  style?: StyleProp<ViewStyle>;
}

export const PageContainer: React.FunctionComponent<PageContainerProps> =
  props => {
    return (
      <View style={props.style}>
        {props.loading ? (
          <PageLoading>{props.loadingMessage}</PageLoading>
        ) : (
          props.children
        )}
      </View>
    );
  };
