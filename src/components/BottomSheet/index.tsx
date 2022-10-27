import React, {useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
interface Props {
  currentSnapPoints?: Array<string | number>; //Custom height bottom sheet
  children: Element;
}

export interface BottomSheetRef {
  open(): void;
  close(): void;
}
const defaultSnapPoints = ['25%', '50%'];
export const BottomSheetCustom = React.forwardRef<BottomSheetRef, Props>(
  (props, ref) => {
    const {currentSnapPoints, children} = props;
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(
      () => currentSnapPoints ?? defaultSnapPoints,
      [currentSnapPoints],
    );
    const handleSheetChanges = useCallback((index: number) => {
      if (index === 0) {
        bottomSheetRef.current?.close();
      }
    }, []);
    useImperativeHandle(
      ref,
      () => ({
        open: () => {
          bottomSheetRef.current?.expand();
        },
        close: () => {
          bottomSheetRef.current?.close();
        },
      }),
      [],
    );
    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>{children}</View>
      </BottomSheet>
    );
  },
);
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
