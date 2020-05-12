import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";

class FAQPage extends Component {
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
    const { user } = this.props;
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
          urlOnLoad={this.props.urlOnLoad}
          onUrlChange={this.props.onUrlChange}
        />
        <span>
          What is the name of this project?
          <br />
          Student Center <br />
          <br />
          What is this project about? <br />
          To create a new and efficient college management system. <br />
          <br />
          Who are the members? <br />
          Wei Lin, MD R Uddin, Nabil Hayet <br />
          <br />
          When did this project begin? <br />
          February 4th, 2020 <br />
          <br />
          What is the goal of this project? <br />
          A capstone course project where students are to work in a team of 3-4
          people to design a program from scratch. <br />
        </span>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default FAQPage;
