// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3z13t2KibWOtG7MWaN6kwg4AWRCdyauw",
  authDomain: "clone-8ab90.firebaseapp.com",
  projectId: "clone-8ab90",
  storageBucket: "clone-8ab90.appspot.com",
  messagingSenderId: "344521188611",
  appId: "1:344521188611:web:33b2019ddf051579903536",
  measurementId: "G-9RVM2TFBE2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 
