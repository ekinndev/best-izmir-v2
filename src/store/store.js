import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './slices/common';

export default configureStore({
  reducer: {
    common: commonSlice,
  },
});
