import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1yn1UMKDwpypP_yydIFe3ttI3T6TiETk',
  authDomain: 'crwn-db-ef2af.firebaseapp.com',
  databaseURL: 'https://crwn-db-ef2af.firebaseio.com',
  projectId: 'crwn-db-ef2af',
  storageBucket: '',
  messagingSenderId: '565472711918',
  appId: '1:565472711918:web:126532063778ef87'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// GOOGLE AUTH SETUP
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
