/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '../../utils/db';

const initialState = {
  theme: 'light', // or dark
  userInfo: undefined,
};

export const fetchUser = createAsyncThunk('user/fetchLoggedInUser', async email => {
  const userEmail = email;
  const querySnapshot = await firestore.collection('users').get();
  let firebaseUser = {};

  querySnapshot.forEach(doc => {
    const data = doc.data();

    if (data.email === userEmail) {
      firebaseUser = { ...data, userId: doc.id };
    }
  });

  return firebaseUser;
});

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
    setUser: (state, payload) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [fetchUser.rejected]: state => {
      state.userInfo = null;
    },
  },
});

export const { toggleTheme, setUser } = commonSlice.actions;

export default commonSlice.reducer;
