import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface AuthState {
  loading: boolean;
  token: string | undefined;
}
const initialState: AuthState = {
  loading: false,
  token: undefined,
};
const slice = createSlice({
  name: 'Auth',
  initialState: initialState,
  reducers: {
    signIn: state => {
      state.loading = true;
    },
    signInSuccess: (state, {payload}: PayloadAction<string>) => {
      state.loading = false;
      state.token = payload;
    },
  },
});
const authReducer = slice.reducer;
export default authReducer;
export const {signIn, signInSuccess} = slice.actions;
