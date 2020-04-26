import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import AdminTab from "../reusables/AdminTab";

class AdminPage extends Component {
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
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AdminPage;
