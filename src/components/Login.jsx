import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../keys/FirebaseConfig";
import SignedOutNavBar from "../reusables/SignedOutNav";
import CreateForgot from "../reusables/CreateForgot";
import FadeIn from "react-fade-in";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      width: window.innerWidth,
      height: window.innerHeight,
      user: this.props.user,
      authError: this.props.authError
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState !== nextProps) {
      return {
        user: nextProps.user,
        authError: nextProps.authError
      };
    }
    return null;
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const LoginInfo = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signInStudent(LoginInfo);
  }

  //textbox for user/password input
  render() {
    const { height, width, user, authError } = this.state;
    return !user ? (
      <FadeIn delay="100">
        {" "}
        <div
          style={{
            height: "100vh",
            backgroundColor: "#A4A4A4"
          }}
        >
          <SignedOutNavBar />
          {authError ? (
            <div
              style={{
                height: width / 30,
                width: width / 6,
                marginLeft: width / 2.3,
                marginTop: height / 18
              }}
              className="alert alert-warning"
              role="alert"
            >
              <p style={{ marginBottom: width / 25 }}>{authError}</p>
            </div>
          ) : null}
          <form
            style={{
              marginLeft: width / 2.67,
              marginRight: width / 3.05,
              marginTop: height / 12,
              backgroundColor: "#A42323",
              marginTop: height / 7,
              backgroundColor: "#BBBBBB",
              borderRadius: 25
            }}
          >
            <h3
              style={{
                fontSize: 15,
                marginLeft: width / 11.5,
                color: "#FFFFFF"
              }}
            >
              Log in to Student Center
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
                  type="email"
                  required
                  autoFocus
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </div>
            </div>

            <div
              style={{
                width: width / 5.5,
                height: height / 5.5,
                marginTop: -(height / 10.5),
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
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </div>
            </div>

            <div style={{ marginTop: -(height / 15) }} className="form-group">
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  width: width / 15,
                  height: height / 14,
                  marginLeft: width / 8.3,
                  marginBottom: "10px"
                }}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.onSubmit}
              >
                <p style={{ color: "#000000", fontSize: 18 }}>LOG IN</p>
              </button>
            </div>
          </form>
          <CreateForgot />
        </div>
      </FadeIn>
    ) : (
      <Redirect to="/home" />
    );
  }
}

export default LoginPage;
