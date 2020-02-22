import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";

class Classes extends Component {
  state = { user: this.props.user };
  render() {
    return this.state.user ? (
      <>
        <Navbar signOutStudent={this.props.signOutStudent} />
        <p>classes Page</p>
      </>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Classes;
