// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDM8G3gofftdtzpTegKLOED3PWwka2mC4U",
  authDomain: "clone-88d2f.firebaseapp.com",
  projectId: "clone-88d2f",
  storageBucket: "clone-88d2f.appspot.com",
  messagingSenderId: "688712241270",
  appId: "1:688712241270:web:434b1398473f7ee8244f57",
  measurementId: "G-8DR98MRS6H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };