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
      <div>
        <Navbar signOutStudent={this.props.signOutStudent} />
        <div
          style={{ display: "inline-block", marginTop: "0px" }}
          className="upcoming"
        >
          <UpcomingClasses />
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: "60px"
          }}
          className="user"
        >
          <UserProfile />
        </div>
        <div style={{ display: "inline-block" }} className="holds-resources">
          <HoldsResources />
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
