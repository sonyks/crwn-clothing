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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;