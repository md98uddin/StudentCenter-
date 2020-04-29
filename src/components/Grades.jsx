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
      activeYear: 2018,
      viewTranscript: false,
      printTranscript: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.user) {
      return {
        user: nextProps.user,
      };
    }
    return null;
  }

  // onViewTranscript=e=> {

  // }

  onPrintTranscript = (e) => {
    e.preventDefault();
    window.print();
  };

  onSemesterChange = (semester, year) => {
    this.setState({ activeSemester: semester, activeYear: year });
  };

  onMouseHoverTranscript = (e) => {
    this.setState({
      viewTranscript: !this.state.viewTranscript,
    });
  };

  onMouseHoverPrint = (e) => {
    this.setState({
      printTranscript: !this.state.printTranscript,
    });
  };
  onMouseLeave = (e) => {
    this.setState({
      viewTranscript: false,
      printTranscript: false,
    });
  };

  render() {
    const {
      user,
      activeSemester,
      activeYear,
      viewTranscript,
      printTranscript,
    } = this.state;
    return user ? (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#A4A4A4",
          //backgroundImage: "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/105601-red-star-pattern.jpg?w=800&q=95')"
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
          privilege={user.privilege}
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
          semesterClasses={user.classesCompleted.concat(user.currentClasses)}
          viewTranscript={viewTranscript}
          printTranscript={printTranscript}
          onMouseHoverPrint={this.onMouseHoverPrint}
          onMouseHoverTranscript={this.onMouseHoverTranscript}
          onMouseLeave={this.onMouseLeave}
          onPrintTranscript={this.onPrintTranscript}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Grades;
