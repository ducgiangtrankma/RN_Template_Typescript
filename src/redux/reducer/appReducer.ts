import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface AppSate {
  profile: any;

  token: string | undefined;

  loadingApp: boolean;
}
const initialState: AppSate = {
  profile: {},
  token: undefined,
  loadingApp: false,
};
const slice = createSlice({
  name: 'APP_STATE',
  initialState: initialState,
  reducers: {
    onSetToken: (state, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
    onLoadApp: state => {
      state.loadingApp = true;
    },
    onLoadAppEnd: state => {
      state.loadingApp = false;
    },
    onSetAppProfile: (state, {payload}: PayloadAction<unknown>) => {
      state.profile = payload;
    },
    onLogout: state => {
      state.token = undefined;
      state.profile = {};
    },
  },
});
const appReducer = slice.reducer;
export default appReducer;
export const {onSetToken, onLoadApp, onLoadAppEnd, onSetAppProfile, onLogout} =
  slice.actions;
