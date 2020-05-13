import React, { Component } from "react";
import axios from "axios";
import {
  generateStudentEmail,
  checkInfo,
  generateStudentId,
  generateRegistrationCode,
  createStudent,
} from "../utils/services";

class AdminStudent extends Component {
  state = {
    first: "Md",
    last: "Uddin",
    email: null,
    studentid: null,
    gender: "Male",
    year: "Freshman",
    gpa: 3.6,
    credits: 78,
    attending: "Fulltime",
    campusid: null,
    advisor: "John Low,WB201,9:00am-10:00am,johnlow@yale.edu",
    major: "Computer Science",
    code: null,
    fieldError: null,
    successMsg: null,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      advisor,
      attending,
      campusid,
      credits,
      first,
      last,
      gender,
      gpa,
      major,
      year,
    } = this.state;
    if (
      advisor &&
      attending &&
      campusid &&
      credits &&
      first &&
      last &&
      gender &&
      gpa &&
      major &&
      year
    ) {
      const student = createStudent(
        advisor,
        attending,
        generateStudentEmail(first, last, campusid),
        generateRegistrationCode(first, last, major),
        generateStudentId(first, last, gender),
        campusid,
        credits,
        first,
        last,
        gender,
        gpa,
        major,
        year
      );

      await axios
        .post(
          `
      http://localhost:3000/students/add
      `,
          student
        )
        .then((res) => {
          if (res.data === "student added to db") {
            var msg = "student added to db";
            this.setState({
              successMsg: msg,
              fieldError: null,
            });
          } else {
            var fieldMsg = "invalid input formats. please fix.";
            this.setState({
              fieldError: fieldMsg,
              successMsg: null,
            });
          }
        });
    } else {
      var fieldMsg = "all fields must be filled in/correct";
      this.setState({
        fieldError: fieldMsg,
        successMsg: null,
      });
    }
  };

  render() {
    const {
      first,
      last,
      campusid,
      gender,
      major,
      email,
      fieldError,
      successMsg,
    } = this.state;
    const { currentTab } = this.props;
    const {
      main,
      formDiv,
      btnStyles,
      inputStyle,
      successMsgStyle,
      fieldErrorStyle,
    } = styles;

    return currentTab === "Students" ? (
      <div style={main} className="main">
        <div style={formDiv} className="innerInputs">
          <span>
            <label>FIRST: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="first"
            placeholder="First Name"
          />{" "}
          <span>
            <label>LAST: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="last"
            placeholder="Last Name"
          />
          <br />
          <span>
            <label>EMAIL: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="email"
            defaultValue={
              checkInfo(first, last, campusid) &&
              generateStudentEmail(first, last, campusid)
            }
            placeholder="will generate after info"
            disabled
          />
          <label>STUDENT ID:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="studentid"
            defaultValue={
              checkInfo(first, last, campusid) &&
              generateStudentId(first, last, campusid, gender)
            }
            placeholder="will generate after info"
            disabled
          />
          <br />
          <label>GENDER:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="gender"
            placeholder="Male or Female or Non-Binary"
          />
          <label>YEAR:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="year"
            placeholder="Freshman or Sophomore or Junior or Senior"
          />
          <br />
          <label>GPA:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="gpa"
            placeholder="eg. 3.7"
          />{" "}
          <label>CREDITS:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="credits"
            placeholder="eg. 120"
          />
          <br />
          <label>ATTENDING:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="attending"
            placeholder="Fulltime or Parttime or No"
          />
          <label>ADVISOR:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="advisor"
            placeholder="name, room, hours, contact"
          />
          <br />
          <label>MAJOR:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="major"
            placeholder="Computer Science or Business etc."
          />
          <label>REGISTRATION ID:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="code"
            defaultValue={
              checkInfo(first, last, campusid)
                ? generateRegistrationCode(first, last, major)
                : ""
            }
            placeholder="will generate after info"
            disabled
          />
          <br />
          <label>CAMPUS ID:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="campusid"
            placeholder="eg. 1234 or 4567 etc."
          />
        </div>

        <br />
        <button onClick={this.onSubmit} style={btnStyles} className="btn-sm">
          ADD STUDENT
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
    marginLeft: width / 20,
    marginTop: height / 25,
  },
  btnStyles: {
    marginLeft: width / 5.2,
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
    marginLeft: width / 6,
    backgroundColor: "#260ec4",
    borderRadius: 10,
    width: width / 5.2,
  },
  successMsgStyle: {
    marginLeft: width / 5.5,
    backgroundColor: "#1e4a1c",
    borderRadius: 10,
    width: width / 6,
  },
};

export default AdminStudent;
