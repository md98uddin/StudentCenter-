import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import UpcomingClasses from "../reusables/UpcomingClasses";
import UserProfile from "../reusables/UserProfile";
import HoldsResources from "../reusables/HoldsResources";

class Home extends Component {
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
      <div
        style={{
          height: "100vh",
          backgroundColor: "#6b6558"
        }}
      >
        <Navbar signOutStudent={this.props.signOutStudent} />
        <UpcomingClasses />
        <UserProfile />
        <HoldsResources />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
