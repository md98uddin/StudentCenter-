import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import ClassesTab from "../reusables/ClassesTab";
import CourseSearch from "../reusables/CourseSearch";

class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      currentTab: "Add Courses",
      subject: null,
      courseNo: null,
      searchQuery: null,
      fieldError: null
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

  onTabChange = tab => {
    this.setState({
      currentTab: tab
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { user, currentTab } = this.state;
    return user ? (
      <div className="main">
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
          <CourseSearch
            currentTab={currentTab}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          <ClassesTab onTabChange={this.onTabChange} currentTab={currentTab} />
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Classes;
