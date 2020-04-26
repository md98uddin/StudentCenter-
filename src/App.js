import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import firebase from "./keys/FirebaseConfig";
import axios from "axios";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Registration";
import Grades from "./components/Grades";
import Classes from "./components/Classes";
import AidsAndLoans from "./components/AidsAndLoans";
import Advising from "./components/Advising";
import ForgotPassword from "./components/ForgotPassword";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      authError: null,
      courses: null,
      faculties: null
    };
  }

  componentDidMount() {
    this.signInStudent({ email: "nabil.123@yale.edu", password: "123456" });
  }

  render() {
    const { user, authError, courses } = this.state;
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
                authError={authError}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <RegisterPage
                {...props}
                user={user}
                signUpStudent={this.signUpStudent}
              />
            )}
          />
          <Route
            exact
            path="/forgotPassword"
            render={props => (
              <ForgotPassword
                {...props}
                user={user}
                doPasswordReset={this.doPasswordReset}
              />
            )}
          />
          <Route
            exact
            path="/admin"
            render={props => (
              <AdminPage
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
                courses={courses}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <HomePage
                {...props}
                user={user}
                signOutStudent={this.signOutStudent}
                courses={courses}
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
                courses={courses}
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
                courses={courses}
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
                courses={courses}
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
                courses={courses}
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
      .then(async data => {
        const user = await axios.get(
          `http://localhost:3000/students/${data.user.email}`
        );
        const courses = await axios.get(
          `http://localhost:3000/courses?campusId=${user.data[0].campusId}`
        );
        this.setState({ user: user.data[0], courses: courses.data });
      })
      .catch(error => {
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          this.setState({ authError: "invalid email or password" });
        }
      });
  };

  signUpStudent = async obj => {
    const { email, password, registrationCode } = obj;
    axios
      .post(`http://localhost:3000/students/add/${registrationCode}`, { email })
      .then(res => {
        if (res.data === "code matches") {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async res => {
              this.setState({ user: res.user });
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log("error", error);
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

  doPasswordReset = email => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ email: "", error: null });
      })
      .catch(error => {
        this.setState({ user: null, error: "Invalid Email" });
      });
  };
}
export default App;
