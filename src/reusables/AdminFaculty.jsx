import React, { Component } from "react";
import { createFaculty } from "../utils/services";
import axios from "axios";

class AdminFaculty extends Component {
  state = {
    name: null,
    department: null,
    employeeType: null,
    room: null,
    hours: null,
    days: null,
    campusid: null,
    contact: null,
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
      name,
      department,
      employeeType,
      hours,
      room,
      days,
      campusid,
      contact,
    } = this.state;
    e.preventDefault();
    if (
      name &&
      department &&
      employeeType &&
      room &&
      days &&
      campusid &&
      contact
    ) {
      var faculty = createFaculty(
        name,
        department,
        employeeType,
        room,
        hours,
        days,
        campusid,
        contact
      );

      await axios
        .post("http://localhost:3000/faculties/add", faculty)
        .then(async (res) => {
          var msg = `${employeeType} ${name} was added!`;
          this.setState({
            successMsg: msg,
            fieldError: null,
          });
        });
    } else {
      var fieldErrorMsg = "all fields must be filled in/correct";
      this.setState({
        fieldError: fieldErrorMsg,
        successMsg: null,
      });
    }
  };

  render() {
    const { fieldError, successMsg } = this.state;
    const { currentTab } = this.props;
    const {
      main,
      formDiv,
      btnStyles,
      inputStyle,
      fieldErrorStyle,
      successMsgStyle,
    } = styles;

    return currentTab === "Faculty" ? (
      <div style={main} className="main">
        <div style={formDiv} className="innerInputs">
          <span>
            <label>NAME: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="name"
            placeholder="eg. John Doe"
          />
          <br />
          <span>
            <label>DEPARTMENT: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="department"
            placeholder="eg. Math or Comp Sci etc"
          />{" "}
          <br />
          <span>
            <label>EMPLOYEE TYPE: </label>{" "}
          </span>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="employeeType"
            placeholder="eg. Professor or Adviser"
          />
          <br />
          <label>ROOM:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="room"
            placeholder="eg. WB201"
          />
          <br />
          <label>HOURS:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="hours"
            placeholder="eg. 11:30am-01:30pm"
          />
          <br />
          <label>DAYS:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="days"
            placeholder="eg. Monday"
          />
          <br />
          <label>CAMPUS ID:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="campusid"
            placeholder="eg. 1234 or 4567 etc"
          />
          <br />
          <label>CONTACT:</label>
          <input
            onChange={this.onChange}
            style={inputStyle}
            type="text"
            name="contact"
            placeholder="eg. email, phone"
          />
        </div>

        <br />
        <button onClick={this.onSubmit} style={btnStyles} className="btn-sm">
          ADD FACULTY
        </button>
        {fieldError && (
          <div style={fieldErrorStyle}>
            <p>{fieldError}</p>
          </div>
        )}
        {successMsgStyle && (
          <div style={successMsgStyle}>
            <p style={{ marginLeft: window.innerWidth / 50 }}>{successMsg}</p>
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
    marginLeft: width / 14,
    marginTop: height / 25,
  },
  btnStyles: {
    marginLeft: width / 5.2,
    marginBottom: height / 30,
  },
  inputStyle: {
    borderRadius: 10,
    marginTop: window.innerHeight / 75,
    marginLeft: window.innerWidth / 80,
  },
  fieldErrorStyle: {
    marginLeft: width / 6,
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

export default AdminFaculty;
