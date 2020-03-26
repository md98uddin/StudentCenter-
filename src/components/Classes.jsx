import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { filterClassesQuery } from "../utils/services";
import axios from "axios";
import Navbar from "./NavBar";
import ClassesTab from "../reusables/ClassesTab";
import AddCourseSearch from "../reusables/AddCourseSearch";

class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      courses: this.props.courses,
      currentTab: "Add Courses",
      shopCart: [],
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

  onSelect = async obj => {
    const { user } = this.state;
    await axios
      .post(`http://localhost:3000/students/add/current/${user.email}`, obj)
      .then(() => {
        console.log("sent to server");
      });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { courses, subject, courseNo, user } = this.state;

    if (user) {
      if (!subject || !courseNo) {
        var fieldErrorMessage = "both field is required";
        this.setState({
          fieldError: fieldErrorMessage
        });
      } else if (subject !== null && courseNo !== null) {
        const filter = await axios.get(
          `http://localhost:3000/courses?campusId=${user.campusId}&prefix=${subject}&courseNumber=${courseNo}`
        );
        this.setState({ searchQuery: filter.data });
      }
    }
  };

  render() {
    const { user, currentTab, subject, courseNo, searchQuery } = this.state;
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
          <AddCourseSearch
            currentTab={currentTab}
            subject={subject}
            courseNo={courseNo}
            searchQuery={searchQuery}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            onSelect={this.onSelect}
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
