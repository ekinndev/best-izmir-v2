/* eslint-disable import/no-unresolved */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import firestore from '../../../utils/db';

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
    async session(props) {
      // const userEmail = props.user.email;
      // const querySnapshot = await firestore.collection('users').get();
      // let firebaseUser = {};

      // querySnapshot.forEach(doc => {
      //   const data = doc.data();

      //   if (data.email === userEmail) {
      //     firebaseUser = { ...data, id: doc.id };
      //   }
      // });

      return { ...props };
      // return { ...props, user: { ...props.user, userId: firebaseUser.id, isAdmin: firebaseUser?.isAdmin } };
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null,
  },
});
