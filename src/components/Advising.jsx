import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import AdviserCard from "../reusables/AdviserCard";

class Advising extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user };
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
    const { user } = this.props;
    return user ? (
      <div
        style={{
          backgroundColor: "#A4A4A4",
          height: "100vh"
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
        />
        <AdviserCard adviser={user.adviser} />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Advising;
