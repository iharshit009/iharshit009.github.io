import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVHejfTTa_HxTGld9QgoglzWKEzOv-b0Y",
  authDomain: "timeline-9cb7b.firebaseapp.com",
  databaseURL: "https://timeline-9cb7b.firebaseio.com",
  projectId: "timeline-9cb7b",
  storageBucket: "timeline-9cb7b.appspot.com",
  messagingSenderId: "872774716863",
  appId: "1:872774716863:web:ab9dbc02d94b0bf886250a",
  measurementId: "G-RBWN8MRZJ7"
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
