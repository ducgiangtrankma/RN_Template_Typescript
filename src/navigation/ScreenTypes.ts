export enum APP_SCREEN {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  SETTING = 'SETTING',
  FOOD = 'FOOD',
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
  [APP_SCREEN.FOOD]: undefined;
};

export type RootStackParamList = {
  [APP_SCREEN.AUTHENTICATION]: undefined;
  [APP_SCREEN.MAIN_APP]: undefined;
} & Partial<UnAuthenticationPramsList> &
  Partial<AuthenticationPramsList>;
