/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firestore from '../../utils/db';
import type { AppDispatch } from '../store';

interface User {
  email: string;
  emailVerified: null;
  image: string;
  isAdmin: boolean;
  name: string;
  userId: string;
}

interface CommonState {
  userInfo: User | undefined | null;
}

const initialState: CommonState = {
  userInfo: undefined,
};

export const fetchUser = (email: string) => async (dispatch: AppDispatch) => {
  try {
    const userEmail = email;
    const querySnapshot = await firestore.collection('users').get();
    let firebaseUser = Object.create(null);

    querySnapshot.forEach(doc => {
      const data = doc.data();

      if (data.email === userEmail) {
        firebaseUser = { ...data, userId: doc.id };
      }
    });

    dispatch(setUser(firebaseUser));
  } catch (e) {
    dispatch(setUser(null));
  }
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUser } = commonSlice.actions;

export default commonSlice.reducer;
