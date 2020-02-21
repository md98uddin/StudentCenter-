import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./keys/FirebaseConfig";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";

import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Registration";
import { getMockData } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    //check for auth token
    //if no authtoken, send to /login
    // try {
    //   this.setState({ user: getMockData() });
    // } catch (error) {
    //   console.log(error);
    // }
    this.signInStudent({ email: "nabil.123@yale.edu", password: "123456" });
    //this.signOutStudent();
    //window.location = "/login";
  }
  render() {
    const { user } = this.state;
    //if authToken is not verified yet, render loading symbol
    return !user ? (
      <>
        <Router>
          <Switch>
            <Route
              path="/login"
              render={props => (
                <LoginPage {...props} signInStudent={this.signInStudent} />
              )}
            />
            <Route path="/register" exact component={RegisterPage} />
          </Switch>
        </Router>
      </>
    ) : (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }

  signInStudent = obj => {
    firebase
      .auth()
      .signInWithEmailAndPassword(obj.email, obj.password)
      .then(data => {
        this.setState({ user: data });
      });
  };

  signOutStudent = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location = "/login";
      });
  };
}

export default App;
