import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import firebase from "./keys/FirebaseConfig";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Registration";
import Grades from "./components/Grades";
import Classes from "./components/Classes";
import AidsAndLoans from "./components/AidsAndLoans";
import Advising from "./components/Advising";
import { getMockData, currentCourses, getClassDetails } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      userInfo: getMockData()
    };
  }

  componentDidMount() {
    //this.signInStudent({ email: "nabil.123@yale.edu", password: "123456" });
  }

  render() {
    const { user, userInfo } = this.state;
    console.log("user current classes", getClassDetails());
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
                userInfo={userInfo}
                signOutStudent={this.signOutStudent}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }

  signInStudent = obj => {
    const { email, password } = obj;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
      });
  };
}

export default App;
