export enum APP_SCREEN {
  HOME_TAB = 'HOME_TAB',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  PLAY = 'PLAY',
  CHANNEL = 'CHANNEL',
  CHANNELS = 'CHANNELS',
  SETTING = 'SETTING',
  RESULT = 'RESULT',
  REVIEW = 'REVIEW',
  PROFILE = 'PROFILE',
  AUTHENTICATION = 'AUTHENTICATION',
  MAIN_APP = 'MAIN_APP',
}
export type UnAuthenticationParamsList = {
  [APP_SCREEN.LOGIN]: undefined;
};
export type AuthenticationParamsList = {
  [APP_SCREEN.MAIN_APP]: undefined;
};

export type RootStackParamList = {
  [APP_SCREEN.AUTHENTICATION]: undefined;
  [APP_SCREEN.MAIN_APP]: undefined;
} & Partial<UnAuthenticationParamsList> &
  Partial<AuthenticationParamsList>;
