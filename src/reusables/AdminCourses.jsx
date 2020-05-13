import React, { Component } from "react";
import { createCourse } from "../utils/services";
import axios from "axios";

class AdminCourses extends Component {
  state = {
    prefix: "CSCI",
    courseNumber: "27500",
    professor: "Perry Platypus",
    room: "WB210",
    days: "Friday,12:00:00,14:15:00",
    credits: "3",
    semester: "Fall",
    year: "2020",
    duration: "2020-03-16,2020-06-16",
    studentsLimit: "30",
    campus: "York College",
    campusid: "4567",
    section: "102",
    fieldError: null,
    successMsg: null,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    const {
      prefix,
      courseNumber,
      professor,
      room,
      days,
      credits,
      semester,
      year,
      duration,
      studentsLimit,
      campus,
      campusid,
      section,
    } = this.state;
    e.preventDefault();
    if (
      prefix &&
      courseNumber &&
      professor &&
      room &&
      days &&
      credits &&
      semester &&
      year &&
      duration &&
      studentsLimit &&
      campus &&
      campusid &&
      section
    ) {
      const course = await createCourse(
        prefix,
        courseNumber,
        professor,
        room,
        days,
        credits,
        semester,
        year,
        duration,
        studentsLimit,
        campus,
        campusid,
        section
      );

      await axios
        .post("http://localhost:3000/courses/add", course)
        .then((res) => {
          if (res.data === "course was created") {
            var msg = "course was added to the database";
            this.setState({
              successMsg: msg,
              fieldError: null,
            });
          } else if (res.data === "duplicate course") {
            var fieldMsg = "course section already exists";
            this.setState({
              fieldError: fieldMsg,
              successMsg: null,
            });
          }
        });
    } else {
      var fieldMsg = "all fields must be filled in";
      this.setState({
        fieldError: fieldMsg,
        successMsg: null,
      });
    }
  };

  render() {
    const { currentTab } = this.props;
    const { fieldError, successMsg } = this.state;
    const {
      main,
      formDiv,
      btnStyles,
      inputStyle,
      fieldErrorStyle,
      successMsgStyle,
    } = styles;

    return currentTab === "Courses" ? (
      <div style={main} className="main">
        <div style={formDiv} className="innerInputs">
          <span>
            <label>PREFIX: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="prefix"
            defaultValue="CSCI"
            placeholder="eg. CSCI or MATH etc."
          />
          <span>
            <label>DURATION: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="duration"
            defaultValue="2020-03-16,2020-06-16"
            placeholder="eg. 2020-03-16,2020-06-16"
          />{" "}
          <br />
          <span>
            <label>COURSE #: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="courseNumber"
            defaultValue="27500"
            placeholder="eg. 27500 or 31000 etc."
          />
          <label>PROFESSOR:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="professor"
            defaultValue="Perry Platypus"
            placeholder="eg. Perry Platypus"
          />
          <br />
          <label>ROOM:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="room"
            defaultValue="WB210"
            placeholder="WB210"
          />
          <label>DAYS:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="days"
            defaultValue="Friday,12:00:00,14:15:00"
            placeholder="eg. Monday, military-military"
          />
          <br />
          <label>CREDITS:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="credits"
            defaultValue="3"
            placeholder="eg. 1 or 2.5 etc."
          />{" "}
          <label>SEMESTER:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="semester"
            defaultValue="Fall"
            placeholder="eg. Fall or Spring etc."
          />
          <br />
          <label>YEAR:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="year"
            defaultValue="2020"
            placeholder="eg. 2020"
          />
          <label>CAMPUS:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="campus"
            defaultValue="Hunter College"
            placeholder="eg. Hunter College or City College etc."
          />
          <br />
          <label>CAMPUS ID:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="campusid"
            defaultValue="4567"
            placeholder="eg. 1234 or 4567 etc."
          />
          <label>SECTION:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="section"
            defaultValue="102"
            placeholder="eg. 16 or 102 etc."
          />
          <label>STUDENTS LIMIT:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="studentLimit"
            defaultValue="30"
            placeholder="eg. 20 or 150 etc."
          />
        </div>

        <br />
        <button onClick={this.onSubmit} style={btnStyles} className="btn-sm">
          ADD COURSES
        </button>
        {fieldError && (
          <div style={fieldErrorStyle}>
            <p style={{ marginLeft: window.innerWidth / 60 }}>{fieldError}</p>
          </div>
        )}
        {successMsgStyle && (
          <div style={successMsgStyle}>
            <p style={{ marginLeft: window.innerWidth / 35 }}>{successMsg}</p>
          </div>
        )}
      </div>
    ) : null;
  }
}

const { innerHeight: height, innerWidth: width } = window;
const styles = {
  main: {
    float: "right",
    backgroundColor: "#9e151e",
    height: height / 1.17,
    width: width / 1.92,
    marginRight: width / 8,
    color: "#ffffff",
    border: "solid",
    borderColor: "#000000",
    marginTop: height / 18,
  },
  formDiv: {
    borderRadius: 10,
    marginLeft: width / 14.5,
    marginTop: height / 25,
  },
  btnStyles: {
    marginLeft: width / 4.5,
    marginBottom: height / 30,
  },
  inputStyle: {
    borderRadius: 10,
    marginTop: height / 75,
    marginLeft: width / 80,
    margin: width / 120,
    width: width / 6.9,
  },
  fieldErrorStyle: {
    marginLeft: width / 5.5,
    backgroundColor: "#260ec4",
    borderRadius: 10,
    width: width / 5.8,
  },
  successMsgStyle: {
    marginLeft: width / 7,
    backgroundColor: "#1e4a1c",
    borderRadius: 10,
    width: width / 4,
  },
};

export default AdminCourses;
