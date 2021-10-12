/* eslint-disable import/no-unresolved */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDc9mBzcwAdsRyKjYY8i1Akh1zxSAWXDjk',
  authDomain: 'best-izmir-v2.firebaseapp.com',
  projectId: 'best-izmir-v2',
  storageBucket: 'best-izmir-v2.appspot.com',
  messagingSenderId: '987079972464',
  appId: '1:987079972464:web:a93a7b14d251f990e7c6b5',
};

const firestore = (firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)).firestore();

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(firestore),
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google' && profile.email.endsWith('@best-eu.org')) {
        return true;
      }
      return false;
    },
  },
});
