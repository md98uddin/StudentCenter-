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
    const { user } = this.state;
    return user ? (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#A4A4A4"
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
        />
        <UpcomingClasses currentClasses={user.currentClasses} />
        <UserProfile />
        <HoldsResources holds={user.holds} />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
