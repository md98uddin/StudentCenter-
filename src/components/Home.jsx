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
        backgroundColor: '#A4A4A4',
        //backgroundImage: "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/105601-red-star-pattern.jpg?w=800&q=95')"
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
