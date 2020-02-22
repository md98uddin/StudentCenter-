import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      registrationCode: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.user) {
      return {
        user: nextProps.user
      };
    }
    return null;
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { email, password, confirmPassword } = this.state;
    e.preventDefault();
    if (confirmPassword !== password) {
      return console.log("passwords do not match");
    }

    this.props.signUpStudent({ email, password });
  };

  render() {
    const {
      username,
      password,
      confirmPassword,
      email,
      registrationCode
    } = this.state;
    const { onInputChange } = this;
    return !this.props.user ? (
      <div>
        <h3>Student Registration</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              required
              autoFocus
              name="username"
              className="form-control"
              placeholder="username"
              value={username}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
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

          <div className="form-group">
            <label>Registration Code</label>
            <input
              type="text"
              required
              name="registrationCode"
              className="form-control"
              placeholder="school provided registration code..."
              value={registrationCode}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
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

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Confirm" className="btn btn-primary" />
          </div>
        </form>
      </div>
    ) : (
      <Redirect to="/home" />
    );
  }

  createStudentAccount = registrationCode => {
    //search students table
    //if userObj.registrationCode matches one in table and registered is false
    //tick registered to true else output student account active already
    //node.js endpoint to tick with /createUser/:registrationCode
    //firebase.createUserWithEmailAndPassword(email, password);
    //redirect to /login
  };
}

export default RegisterPage;
