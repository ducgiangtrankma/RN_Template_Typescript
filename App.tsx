import * as React from 'react';
import {Suspense} from 'react';
import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContainer} from '@navigation/AppNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18next from './src/utils/i18n/i18n';
import KeyboardManager from 'react-native-keyboard-manager';
import {isIos} from '@common';
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import {
  GlobalLoading,
  globalLoadingRef,
  GlobalMessage,
  globalMessageRef,
} from '@components';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
if (isIos) {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(false);
  // KeyboardManager.setToolbarDoneBarButtonItemText("Done");
  // KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
  // KeyboardManager.setToolbarPreviousNextButtonEnable(false);
  // KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
  // KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
  // KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setOverrideKeyboardAppearance(true);
  KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
  // KeyboardManager.isKeyboardShowing()
  //   .then((isShowing) => {
  //       // ...
  //   });
}

const theme = {
  ...DefaultTheme,
  // Specify custom property in nested object
  colors: {
    primary: 'rgb(21,47,170)',
    secondary: 'rgb(50,77,230)',
    tertiary: 'rgb(246,67,45)',
    error: 'rgb(208,81,110)',
  },
};

interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18next}>
              <Suspense fallback={null}>
                <AppContainer />
                <GlobalLoading ref={globalLoadingRef} />
                <GlobalMessage ref={globalMessageRef} />
              </Suspense>
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
