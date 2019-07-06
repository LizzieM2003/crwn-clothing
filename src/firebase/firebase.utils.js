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

// insert authenticated user into database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // see if document already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
