import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBsX8JEiXFVbdqmMJ0RFPc4BDKMpYW9oYM",
    authDomain: "sih2024-1b4ec.firebaseapp.com",
    projectId: "sih2024-1b4ec",
    storageBucket: "sih2024-1b4ec.appspot.com",
    messagingSenderId: "607148872713",
    appId: "1:607148872713:web:a8c23de84cc93a370cd4d8",
    measurementId: "G-419G7TZ4VD"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default firebase;
export { db };
