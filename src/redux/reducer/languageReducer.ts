import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface LanguageStae {
  language: string;
}
const initialState: LanguageStae = {
  language: 'vi',
};
const slice = createSlice({
  name: 'changeLanguage',
  initialState: initialState,
  reducers: {
    changeLanguage: (state, {payload}: PayloadAction<string>) => {
      state.language = payload;
    },
  },
});
const languageReducer = slice.reducer;
export default languageReducer;
export const {changeLanguage} = slice.actions;
