import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./keys/FirebaseConfig";
import * as fire from "firebase";

import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Registration";

class App extends Component {
  state = { user: null };

  componentDidMount() {
    // var fb = firebase.initializeApp({
    //   apiKey: "AIzaSyDw7x-B3jEw4eSX3ynSDfOm_usWPLqPmeQ",
    //   authDomain: "studentcenter-813c8.firebaseapp.com",
    //   databaseURL: "https://studentcenter-813c8.firebaseio.com",
    //   projectId: "studentcenter-813c8",
    //   storageBucket: "studentcenter-813c8.appspot.com",
    //   messagingSenderId: "364020918570",
    //   appId: "1:364020918570:web:eceb1c4e85e06bb572d653",
    //   measurementId: "G-5XGMQRCPYT"
    // });
    firebase
      .auth()
      .createUserWithEmailAndPassword("nabil.123@yale.edu", "123456")
      .then(() => {
        console.log("user created");
      });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
