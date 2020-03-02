import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDw7x-B3jEw4eSX3ynSDfOm_usWPLqPmeQ",
  authDomain: "studentcenter-813c8.firebaseapp.com",
  databaseURL: "https://studentcenter-813c8.firebaseio.com",
  projectId: "studentcenter-813c8",
  storageBucket: "studentcenter-813c8.appspot.com",
  messagingSenderId: "364020918570",
  appId: "1:364020918570:web:eceb1c4e85e06bb572d653",
  measurementId: "G-5XGMQRCPYT"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

export default app;
