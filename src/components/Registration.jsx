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
    const { email, password, confirmPassword, registrationCode } = this.state;
    this.setState({
      emailError: "",
      passwordLengthError: "",
      passwordMatchError: "",
      registerCodeError: ""
    });
    e.preventDefault();

    if (confirmPassword !== password) {
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
      !this.state.passwordLengthError &&
      !this.state.passwordMatchError &&
      !this.state.registerCodeError &&
      !this.state.emailError
    ) {
      this.signUpStudent({ email, password });
    }
  };

  render() {
    const { height, width } = this.state;
    const {
      password,
      confirmPassword,
      email,
      registrationCode,
      emailError,
      passwordLengthError,
      passwordMatchError,
      registerCodeError,
      user
    } = this.state;
    const { onInputChange } = this;
    console.log(this.state);
    return !user ? (
      <FadeIn delay="100">
        <div
          style={{
            height: "100vh",
            backgroundColor: "#6b6558"
          }}
        >
          <SignedOutNavBar />
          <form
            style={{
              marginLeft: width / 2.67,
              marginRight: width / 3.05,
              marginTop: height / 11,
              backgroundColor: "#A42323",
              borderRadius: 25
            }}
          >
            <h3
              style={{
                fontSize: 15,
                marginLeft: width / 13,
                color: "#FFFFFF"
              }}
            >
              Register for Student Center
            </h3>
            <div
              style={{
                width: width / 5.5,
                height: height / 4.5,
                marginLeft: height / 8.3
              }}
              className="form-group"
            >
              <label
                style={{
                  fontSize: 18,
                  marginLeft: width / 13.5,
                  color: "#FFFFFF"
                }}
              >
                Email
              </label>
              <div style={{ border: "solid", borderColor: "#fc0335" }}>
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
              {emailError ? (
                <p
                  style={{
                    fontSize: 12,
                    color: "#e8af13",
                    marginLeft: width / 25
                  }}
                >
                  {emailError}
                </p>
              ) : null}
            </div>
            <div
              style={{
                width: width / 5.5,
                height: height / 5.5,
                marginTop: -(height / 10),
                marginLeft: height / 8.3
              }}
              className="form-group"
            >
              <label
                style={{
                  fontSize: 18,
                  marginLeft: width / 15.5,
                  color: "#ffffff"
                }}
              >
                Password
              </label>
              <div style={{ border: "solid", borderColor: "#fc0335" }}>
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
                <p
                  style={{
                    fontSize: 12,
                    color: "#e8af13",
                    marginLeft: width / 32
                  }}
                >
                  {passwordLengthError}
                </p>
              ) : null}
            </div>
            <div
              style={{
                width: width / 5.5,
                height: height / 4.5,
                marginLeft: height / 8.3,
                marginTop: -(height / 17)
              }}
              className="form-group"
            >
              <label
                style={{
                  fontSize: 18,
                  marginLeft: width / 25,
                  color: "#ffffff"
                }}
              >
                Confirm Password
              </label>
              <div style={{ border: "solid", borderColor: "#fc0335" }}>
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
                <p
                  style={{
                    fontSize: 12,
                    color: "#e8af13",
                    marginLeft: width / 22
                  }}
                >
                  {passwordMatchError}
                </p>
              ) : null}
            </div>
            <div
              style={{
                width: width / 5.5,
                height: height / 4.5,
                marginLeft: height / 8.3,
                marginTop: -(height / 10.5)
              }}
              className="form-group"
            >
              <label
                style={{
                  fontSize: 18,
                  marginLeft: width / 25,
                  color: "#ffffff"
                }}
              >
                Registration Code
              </label>
              <div style={{ border: "solid", borderColor: "#fc0335" }}>
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
                <p
                  style={{
                    fontSize: 12,
                    color: "#e8af13",
                    marginLeft: width / 22
                  }}
                >
                  {registerCodeError}
                </p>
              ) : null}
            </div>
            <div style={{ marginTop: -(height / 12) }} className="form-group">
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  width: width / 8,
                  height: height / 14,
                  marginLeft: width / 11.3,
                  marginBottom: width / 100
                }}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.onSubmit}
              >
                <p
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    marginTop: height / 200
                  }}
                >
                  CREATE ACCOUNT
                </p>
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
        if (error.code === "auth/invalid-email") {
          var emailMessage = "email format is not correct";
          this.setState({ emailError: emailMessage });
        }
      });
  };
}

export default RegisterPage;
