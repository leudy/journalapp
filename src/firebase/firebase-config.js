import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDRibtqYXDl3eRQZclGBOzSG988A1d5-7Y",
    authDomain: "citasbarber.firebaseapp.com",
    databaseURL: "https://citasbarber.firebaseio.com",
    projectId: "citasbarber",
    storageBucket: "citasbarber.appspot.com",
    messagingSenderId: "876701503629",
    appId: "1:876701503629:web:e54b4256c31c7c40dcd2c4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db, googleAuthProvider, firebase
}