import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../keys/FirebaseConfig";
import FadeIn from "react-fade-in";
import SignedOutNavBar from "../reusables/SignedOutNav";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      email: "",
      registrationCode: "",
      width: window.innerWidth,
      height: window.innerHeight,
      passwordLengthError: null,
      passwordMatchError: null,
      registerCodeError: null,
      emailError: null,
      user: null
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.user !== nextProps.user) {
  //     return {
  //       user: nextProps.user
  //     };
  //   }
  //   return null;
  // }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const {
      email,
      password,
      confirmPassword,
      registrationCode,
      passwordLengthError,
      passwordMatchError,
      registerCodeError,
      emailError
    } = this.state;
    this.setState({
      emailError: "",
      passwordLengthError: "",
      passwordMatchError: "",
      registerCodeError: ""
    });
    e.preventDefault();

    if (
      confirmPassword !== password ||
      confirmPassword === null ||
      password === null
    ) {
      var passwordMatchErrorMessage = "passwords do not match";
      this.setState({ passwordMatchError: passwordMatchErrorMessage });
    }
    if (registrationCode !== "abc123") {
      var registerCodeErrorMessage = "invalid registration code";
      this.setState({ registerCodeError: registerCodeErrorMessage });
    }
    if (password.length < 6) {
      var passwordLengthErrorMessage = "password must length 6 or more";
      this.setState({ passwordLengthError: passwordLengthErrorMessage });
    }

    if (
      !passwordLengthError &&
      !passwordMatchError &&
      !registerCodeError &&
      !emailError
    ) {
      this.signUpStudent({ email, password });
    }
  };

  render() {
    const {
      password,
      confirmPassword,
      email,
      registrationCode,
      emailError,
      passwordLengthError,
      passwordMatchError,
      registerCodeError,
      user,
      height,
      width
    } = this.state;

    const {
      mainDiv,
      formDiv,
      header,
      emailDiv,
      passwordDiv,
      confirmPassDiv,
      registerDiv,
      emailLabel,
      passwordLabel,
      confirmPassLabel,
      registerLabel,
      emailInputDiv,
      passwordInputDiv,
      confirmPassInputDiv,
      registerInputDiv,
      emailErrorLabel,
      passwordErrorLabel,
      confirmPassErrorLabel,
      registerErrorLabel,
      buttonDiv,
      buttonStyle,
      buttonLabel
    } = styles;

    const { onInputChange } = this;
    console.log(this.state);
    return !user ? (
      <FadeIn delay="100">
        <div style={mainDiv}>
          <SignedOutNavBar />
          <form style={formDiv}>
            <h3 style={header}>Register for Student Center</h3>
            <div style={emailDiv} className="form-group">
              <label style={emailLabel}>Email</label>
              <div style={emailInputDiv}>
                <input
                  type="text"
                  required
                  name="email"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              {emailError ? <p style={emailErrorLabel}>{emailError}</p> : null}
            </div>
            <div style={passwordDiv} className="form-group">
              <label style={passwordLabel}>Password</label>
              <div style={passwordInputDiv}>
                <input
                  type="password"
                  required
                  name="password"
                  className="form-control"
                  placeholder="password..."
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              {passwordLengthError ? (
                <p style={passwordErrorLabel}>{passwordLengthError}</p>
              ) : null}
            </div>
            <div style={confirmPassDiv} className="form-group">
              <label style={confirmPassLabel}>Confirm Password</label>
              <div style={confirmPassInputDiv}>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={onInputChange}
                />
              </div>
              {passwordMatchError ? (
                <p style={confirmPassErrorLabel}>{passwordMatchError}</p>
              ) : null}
            </div>
            <div style={registerDiv} className="form-group">
              <label style={registerLabel}>Registration Code</label>
              <div style={registerInputDiv}>
                <input
                  type="text"
                  required
                  name="registrationCode"
                  className="form-control"
                  placeholder="school provided code..."
                  value={registrationCode}
                  onChange={onInputChange}
                />
              </div>
              {registerCodeError ? (
                <p style={registerErrorLabel}>{registerCodeError}</p>
              ) : null}
            </div>
            <div style={buttonDiv} className="form-group">
              <button
                style={buttonStyle}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.onSubmit}
              >
                <p style={buttonLabel}>CREATE ACCOUNT</p>
              </button>
            </div>
          </form>
        </div>
      </FadeIn>
    ) : (
      <Redirect to="/home" />
    );
  }
  signUpStudent = obj => {
    const { email, password } = obj;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ user: user });
      })
      .catch(error => {
        if (error.code === "auth/invalid-email" || this.state.email === null) {
          var emailMessage = "email format is not correct or taken";
          this.setState({ emailError: emailMessage });
        }
      });
  };
}

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  mainDiv: {
    height: "100vh",
    backgroundColor: "#6b6558"
  },
  formDiv: {
    marginLeft: width / 2.67,
    marginRight: width / 3.05,
    marginTop: height / 11,
    backgroundColor: "#bbbbbb",
    borderRadius: 25
  },
  header: {
    fontSize: 15,
    marginLeft: width / 13,
    color: "#FFFFFF"
  },
  emailDiv: {
    width: width / 5.5,
    height: height / 4.5,
    marginLeft: height / 8.3
  },
  passwordDiv: {
    width: width / 5.5,
    height: height / 5.5,
    marginTop: -(height / 10),
    marginLeft: height / 8.3
  },
  confirmPassDiv: {
    width: width / 5.5,
    height: height / 4.5,
    marginLeft: height / 8.3,
    marginTop: -(height / 17)
  },
  registerDiv: {
    width: width / 5.5,
    height: height / 4.5,
    marginLeft: height / 8.3,
    marginTop: -(height / 10.5)
  },
  emailLabel: {
    fontSize: 18,
    marginLeft: width / 13.5,
    color: "#FFFFFF"
  },
  passwordLabel: {
    fontSize: 18,
    marginLeft: width / 15.5,
    color: "#ffffff"
  },
  confirmPassLabel: {
    fontSize: 18,
    marginLeft: width / 25,
    color: "#ffffff"
  },
  registerLabel: {
    fontSize: 18,
    marginLeft: width / 25,
    color: "#ffffff"
  },
  emailInputDiv: { border: "solid", borderColor: "#fc0335" },
  passwordInputDiv: { border: "solid", borderColor: "#fc0335" },
  confirmPassInputDiv: { border: "solid", borderColor: "#fc0335" },
  registerInputDiv: { border: "solid", borderColor: "#fc0335" },
  emailErrorLabel: {
    fontSize: 12,
    color: "#000000",
    marginLeft: width / 40
  },
  passwordErrorLabel: {
    fontSize: 12,
    color: "#000000",
    marginLeft: width / 32
  },
  confirmPassErrorLabel: {
    fontSize: 12,
    color: "#000000",
    marginLeft: width / 22
  },
  registerErrorLabel: {
    fontSize: 12,
    color: "#000000",
    marginLeft: width / 22
  },
  buttonDiv: { marginTop: -(height / 12) },
  buttonStyle: {
    backgroundColor: "#FFFFFF",
    width: width / 8,
    height: height / 14,
    marginLeft: width / 11.3,
    marginBottom: width / 100
  },
  buttonLabel: {
    color: "#000000",
    fontSize: 16,
    marginTop: height / 200
  }
};

export default RegisterPage;
