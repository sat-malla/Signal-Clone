import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqvvMUjfv0XiaDsNXP6DKRtQKNyUCGB-o",
  authDomain: "project-signal-4eb87.firebaseapp.com",
  projectId: "project-signal-4eb87",
  storageBucket: "project-signal-4eb87.appspot.com",
  messagingSenderId: "321871401945",
  appId: "1:321871401945:web:f13c3ff1fd974cd1a53fc8",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };