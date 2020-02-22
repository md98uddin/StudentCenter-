import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import firebase from "./keys/FirebaseConfig";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";

import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Registration";
import Grades from "./components/Grades";
import Classes from "./components/Classes";
import AidsAndLoans from "./components/AidsAndLoans";
import Advising from "./components/Advising";
import { getMockData } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ""
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
    //this.signInStudent({ email: "nabil.123@yale.edu", password: "123456" });
    //this.signOutStudent();
    // if (!this.state.user) {
    //   window.location = "/login";
    // }
  }
  render() {
    const { user } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Redirect to="/home" />
              </>
            )}
          </Route>
          <Route
            exact
            path="/login"
            render={props => (
              <LoginPage
                {...props}
                signInStudent={this.signInStudent}
                user={user}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => <RegisterPage {...props} user={user} />}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <HomePage
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
              />
            )}
          />
          <Route
            exact
            path="/classes"
            render={props => (
              <Classes
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
              />
            )}
          />
          <Route
            exact
            path="/grades"
            render={props => (
              <Grades
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
              />
            )}
          />
          <Route
            exact
            path="/finaid"
            render={props => (
              <AidsAndLoans
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
              />
            )}
          />
          <Route
            exact
            path="/advising"
            render={props => (
              <Advising
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }

  signInStudent = obj => {
    firebase
      .auth()
      .signInWithEmailAndPassword(obj.email, obj.password)
      .then(data => {
        this.setState({ user: data.user });
      });
  };

  signOutStudent = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ user: null });
      })
      .then(() => {
        console.log("user after signout", this.state.user);
      });
  };
}

export default App;
