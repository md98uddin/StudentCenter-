import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignedOutNavBar from "../reusables/SignedOutNav";
import CreateForgot from "../reusables/CreateForgot";
import FadeIn from "react-fade-in";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.signInStudent({ email, password });
  }

  render() {
    const { user, authError } = this.props;
    const {
      mainDiv,
      mainView,
      formView,
      header,
      emailDiv,
      passwordDiv,
      emailLabel,
      passwordLabel,
      authErrorLabel,
      buttonDiv,
      buttonStyle,
      buttonLabel,
      emailInputDiv,
      passwordInputDiv
    } = styles;
    return !user ? (
      <FadeIn delay="100">
        {" "}
        <div style={mainDiv}>
          <SignedOutNavBar />
          {authError ? (
            <div style={mainView} className="alert alert-warning" role="alert">
              <p style={authErrorLabel}>{authError}</p>
            </div>
          ) : null}
          <form style={formView}>
            <h3 style={header}>Log in to Student Center</h3>
            <div style={emailDiv} className="form-group">
              <label style={emailLabel}>Email</label>
              <div style={emailInputDiv}>
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

            <div style={passwordDiv} className="form-group">
              <label style={passwordLabel}>Password</label>
              <div style={passwordInputDiv}>
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

            <div style={buttonDiv} className="form-group">
              <button
                style={buttonStyle}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.onSubmit}
              >
                <p style={buttonLabel}>LOG IN</p>
              </button>
            </div>
          </form>
          <CreateForgot />
        </div>
      </FadeIn>
    ) : (
      <Redirect to="/grades" />
    );
  }
}

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  mainDiv: {
    height: "100vh",
    backgroundColor: "#A4A4A4"
  },
  mainView: {
    height: width / 30,
    width: width / 6,
    marginLeft: width / 2.3,
    marginTop: height / 18
  },
  formView: {
    marginLeft: width / 2.67,
    marginRight: width / 3.05,
    marginTop: height / 15,
    backgroundColor: "#bbbbbb",
    borderRadius: 25
  },
  header: {
    fontSize: 15,
    marginLeft: width / 11.5,
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
    marginTop: -(height / 10.5),
    marginLeft: height / 8.3
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
  buttonDiv: { marginTop: -(height / 15) },
  buttonStyle: {
    backgroundColor: "#FFFFFF",
    width: width / 15,
    height: height / 14,
    marginLeft: width / 8.3,
    marginBottom: "10px"
  },
  buttonLabel: { color: "#000000", fontSize: 18 },
  emailInputDiv: { border: "solid", borderColor: "#fc0335" },
  passwordInputDiv: { border: "solid", borderColor: "#fc0335" },
  authErrorLabel: { marginBottom: width / 25 }
};

export default LoginPage;
