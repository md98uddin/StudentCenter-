import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import TranscriptSemester from "../reusables/TranscriptSemester";
import GradesTable from "../reusables/GradesTable";

class Grades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      activeSemester: "Fall",
      activeYear: 2018
    };
  }

  componentDidMount() {
    this.setState({});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.user) {
      return {
        user: nextProps.user
      };
    }
    return null;
  }

  // onViewTranscript=e=> {

  // }

  // onPrintTranscript=e=> {

  // }

  onSemesterChange = (semester, year) => {
    this.setState({ activeSemester: semester, activeYear: year });
  };

  render() {
    const { user, activeSemester, activeYear } = this.state;
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
        <GradesTable
          semesterClasses={user.classesCompleted.concat(user.currentClasses)}
          activeSemester={activeSemester}
          activeYear={activeYear}
        />
        <TranscriptSemester
          activeSemester={activeSemester}
          activeYear={activeYear}
          onSemesterChange={this.onSemesterChange}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Grades;
