import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import UpcomingClasses from "../reusables/UpcomingClasses";
import UserProfile from "../reusables/UserProfile";
import HoldsResources from "../reusables/HoldsResources";
import { upcomingSchedule } from "../utils/services";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      urlOnLoad: this.props.urlOnLoad,
    };
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
    const { user } = this.state;
    return user ? (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#A4A4A4",
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
          privilege={user.privilege}
          urlOnLoad={this.props.urlOnLoad}
          onUrlChange={this.props.onUrlChange}
        />
        <UpcomingClasses
          currentClasses={upcomingSchedule(user.currentClasses)}
        />
        <UserProfile
          firstName={user.firstName}
          lastName={user.lastName}
          studentPic={user.studentPic}
          email={user.email}
          studentId={user.studentId}
          gender={user.gender}
          year={user.year}
          campusId={user.campusId}
          major={user.major}
          gpa={user.gpa}
          credits={user.credits}
          attending={user.attending}
        />
        <HoldsResources holds={user.holds} adviser={user.adviser} />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Home;
