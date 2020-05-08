import * as firebase from 'firebase';
import 'firebase/firestore';

// Firebase Config info using a Firebase project created under my FIU account.
export const firebaseConfig = {
    apiKey: "AIzaSyDPo1pyyg-UlOzkncVjvLwlUnqwQhrkrSo",
    authDomain: "map-proto-d519b.firebaseapp.com",
    databaseURL: "https://map-proto-d519b.firebaseio.com",
    projectId: "map-proto-d519b",
    storageBucket: "map-proto-d519b.appspot.com"
};

// Prevents a Firebase-related error, something about Firebase already running
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Import Firestore database library
export const db = firebase.firestore();