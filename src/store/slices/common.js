/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // or dark
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.theme === 'light') {
        state.theme = 'dark';
      } else {
        state.theme = 'light';
      }
    },
  },
});

export const { toggleTheme } = commonSlice.actions;

export default commonSlice.reducer;
