import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignedOutNavBar from "../reusables/SignedOutNav";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      width: window.innerWidth,
      height: window.innerHeight
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

    const LoginInfo = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signInStudent(LoginInfo);
  }

  //textbox for user/password input
  render() {
    const { height, width } = this.state;
    return !this.props.user ? (
      <div>
        <SignedOutNavBar />
        <form
          style={{
            marginLeft: width / 2.3,
            marginRight: width / 3,
            marginTop: height / 9.5
          }}
          onSubmit={this.onSubmit}
        >
          <h3 style={{ fontSize: 15, marginLeft: width / 31 }}>
            Log in to Student Center
          </h3>
          <div
            style={{ width: width / 5.5, height: height / 5 }}
            className="form-group"
          >
            <label style={{ fontSize: 18, marginLeft: width / 13.5 }}>
              Email
            </label>
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

          <div
            style={{
              width: width / 5.5,
              height: height / 5.5
            }}
            className="form-group"
          >
            <label style={{ fontSize: 18, marginLeft: width / 15.5 }}>
              Password
            </label>
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

          <div className="form-group">
            <button
              style={{
                backgroundColor: "#FFFFFF",
                width: width / 15,
                height: height / 14,
                marginLeft: width / 13
              }}
              type="button"
              class="btn btn-secondary btn-lg"
            >
              <p style={{ color: "#B0ACAC", fontSize: 18 }}>LOG IN</p>
            </button>
          </div>
        </form>
      </div>
    ) : (
      <Redirect to="/home" />
    );
  }
}

export default LoginPage;
