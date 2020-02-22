import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";

class Advising extends Component {
  state = { user: this.props.user };
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
