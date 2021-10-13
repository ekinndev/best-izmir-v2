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

export default firestore;
