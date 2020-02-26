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
            marginLeft: width / 2.57,
            marginRight: width / 2.95,
            marginTop: height / 4.5,
            backgroundColor: "#A42323",
            borderRadius: 10
          }}
        >
          <h3
            style={{
              fontSize: 15,
              marginLeft: width / 13,
              color: "#FFFFFF"
            }}
          >
            Log in to Student Center
          </h3>
          <div
            style={{
              width: width / 5.5,
              height: height / 5,
              marginLeft: height / 10
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
            <div>
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
              marginTop: -(height / 13),
              marginLeft: height / 10
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
            <div>
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
                marginLeft: width / 9,
                marginBottom: "10px"
              }}
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={this.onSubmit}
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
