// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcd9gBSCd7vGyVBbnONKd4w5M4hGQ3ov0",
  authDomain: "clone-d3ea2.firebaseapp.com",
  databaseURL: "https://clone-d3ea2.firebaseio.com",
  projectId: "clone-d3ea2",
  storageBucket: "clone-d3ea2.appspot.com",
  messagingSenderId: "1070663228993",
  appId: "1:1070663228993:web:ee424aee094861df85b0c0",
  measurementId: "G-XXSX5NCJHQ",
};

//Initalize the app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initalize the db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
