import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignedOutNavBar from "../reusables/SignedOutNav";
//import CreateForgot from "../reusables/CreateForgot";
import FadeIn from "react-fade-in";

class ForgotPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        error: null,
        user: this.props.user 
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.doPasswordReset(this.state.email);
  };

  //textbox for user/password input
  render() {
    const {user, email} = this.state;
    const isInvalid = email === '';
    const {
      mainDiv,
      formView,
      header,
      emailDiv,
      emailLabel,
      buttonDiv,
      buttonStyle,
      buttonLabel,
      emailInputDiv,
    } = styles;

    return !user ? (
      <FadeIn delay="100">
        {" "}
        <div style={mainDiv}>
          <SignedOutNavBar />
          <form style={formView}>
            <h3 style={header}>Forgot Password</h3>
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
                  value={email}
                  onChange={this.onInputChange}
                />
              </div>
              </div>
            
            <div style={buttonDiv} className="form-group">
              <button
                disabled={isInvalid}
                style={buttonStyle}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.onSubmit}
              >
                <p style={buttonLabel}>RESET</p>
              </button>
            </div>
          </form>
        </div>
      </FadeIn>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  mainDiv: {
    height: "100vh",
    backgroundColor: "#A4A4A4"
  },
  formView: {
    marginLeft: width / 2.67,
    marginRight: width / 3.05,
    marginTop: height / 7,
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
  emailLabel: {
    fontSize: 18,
    marginLeft: width / 13.5,
    color: "#FFFFFF"
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
};

export default ForgotPage;
