import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "API_KEY",
    authDomain: "emilys-app-4387d.firebaseapp.com",
    databaseURL: "https://emilys-app-4387d.firebaseio.com",
    projectId: "emilys-app-4387d",
    storageBucket: "emilys-app-4387d.appspot.com",
    messagingSenderId: "230503113453",
    appId: "1:230503113453:web:bff7140d8cd8ce5cdc62e4"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

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
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({  prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;