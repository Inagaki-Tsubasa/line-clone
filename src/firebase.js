import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyfJR1KyYQZUNF7utweEUMxhciv3sV0us",
  authDomain: "line-clone-374b9.firebaseapp.com",
  projectId: "line-clone-374b9",
  storageBucket: "line-clone-374b9.appspot.com",
  messagingSenderId: "84693889130",
  appId: "1:84693889130:web:d7110b8f50998808579a13",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
