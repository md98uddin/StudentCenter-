import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import GradesTab from "../reusables/GradesTab";

class Grades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user
    };
  }
  render() {
    const { user } = this.state;
    return user ? (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#A4A4A4"
          //backgroundImage: "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/105601-red-star-pattern.jpg?w=800&q=95')"
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
        />
        <GradesTab />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Grades;
