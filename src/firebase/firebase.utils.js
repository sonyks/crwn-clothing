import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyA2W6SxyyOHJgryDx7YQnTines_UknmwiU",
    authDomain: "crwn-clothing-8ab86.firebaseapp.com",
    databaseURL: "https://crwn-clothing-8ab86.firebaseio.com",
    projectId: "crwn-clothing-8ab86",
    storageBucket: "crwn-clothing-8ab86.appspot.com",
    messagingSenderId: "1075117429710",
    appId: "1:1075117429710:web:9a9141d2bcad3cc2e2d19f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;