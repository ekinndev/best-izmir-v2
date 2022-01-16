/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './slices/common';

const store = configureStore({
  reducer: {
    common: commonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
