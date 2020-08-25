import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDaxHnA2wQQ-SRE0oPJPWYtuh7UZoLqEuM",
    authDomain: "super-clothing.firebaseapp.com",
    databaseURL: "https://super-clothing.firebaseio.com",
    projectId: "super-clothing",
    storageBucket: "super-clothing.appspot.com",
    messagingSenderId: "520481756377",
    appId: "1:520481756377:web:cdb5b2c8a6446b087cdac8",
    measurementId: "G-XGD2YL4E0Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => {
    console.log('sign in with google');
    auth.signInWithPopup(provider).then(r =>console.log('sign in with google')
);
};

export default firebase;
