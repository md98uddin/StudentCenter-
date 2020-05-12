import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import AdviserCard from "../reusables/AdviserCard";

class Advising extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user, urlOnLoad: this.props.urlOnLoad };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.user !== nextProps.user ||
      prevState.urlOnLoad !== nextProps.urlOnLoad
    ) {
      return {
        user: nextProps.user,
        urlOnLoad: nextProps.urlOnLoad,
      };
    }
    return null;
  }
  render() {
    const { user, urlOnLoad } = this.props;
    return user ? (
      <div
        style={{
          backgroundColor: "#A4A4A4",
          height: "100vh",
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
          privilege={user.privilege}
          urlOnLoad={urlOnLoad}
          onUrlChange={this.props.onUrlChange}
        />
        <AdviserCard adviser={user.adviser} />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Advising;
