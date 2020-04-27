import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import AdminTab from "../reusables/AdminTab";
import AdminStudent from "../reusables/AdminStudent";
import AdminFaculty from "../reusables/AdminFaculty";
import AdminCourses from "../reusables/AdminCourses";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      courses: this.props.courses,
      currentTab: "Students"
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

  onTabChange = (tab) => {
    this.setState({
      currentTab: tab,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      user,
      currentTab,
    } = this.state;

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
        <AdminStudent currentTab={currentTab}/>
        <AdminFaculty currentTab={currentTab}/>
        <AdminCourses currentTab={currentTab}/>
        <AdminTab 
          onTabChange={this.onTabChange}
          currentTab={currentTab}
        />

      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AdminPage;
