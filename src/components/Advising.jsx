import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";

class Advising extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user
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

  render() {
    return this.state.user ? (
      <>
        <Navbar signOutStudent={this.props.signOutStudent} />
        <p>advising Page</p>
      </>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Advising;
