export enum APP_SCREEN {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  SETTING = 'SETTING',
  DETAIL = 'DETAIL',
  AUTHENTICATION = 'AUTHENTICATION',
  MAIN_APP = 'MAIN_APP',
}
export type UnAuthenticationPramsList = {
  [APP_SCREEN.LOGIN]: undefined;
};
export type AuthenticationPramsList = {
  [APP_SCREEN.MAIN_APP]: undefined;
  [APP_SCREEN.DETAIL]: {
    item: any;
  };
};

export type RootStackParamList = {
  [APP_SCREEN.AUTHENTICATION]: undefined;
  [APP_SCREEN.MAIN_APP]: undefined;
} & Partial<UnAuthenticationPramsList> &
  Partial<AuthenticationPramsList>;
