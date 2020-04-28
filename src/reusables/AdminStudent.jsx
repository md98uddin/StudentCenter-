import React from "react";

const AdminStudent = (props) => {
    const {
        currentTab,
        onChange,
        onSubmit,
    } = props;
    const {
        main,
        formDiv,
        btnStyles,
    } = styles;

    return currentTab === "Students" ? (
        <div style={main} className="main">
          <div style={formDiv} className="innerInputs">
            <span><label>FIRST: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="first"
              placeholder="First Name"
            />{' '}

            <span><label>LAST: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="last"
              placeholder="Last Name"
            />
            <br />
            <span><label>EMAIL: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="email"
              placeholder="Email Address"
            />

            <br />
            <label>STUDENT ID:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="studentid"
              placeholder="Student ID"
            />

            <br />
            <label>GENDER:</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="gender"
              placeholder="Male, Female, Non-Binary"
            />

            <br />
            <label>YEAR:</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="year"
              placeholder="Freshman, Sophomore, Junior, Senior"
            />
            <br />
            <br />
            <label>GPA:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="gpa"
              placeholder="0-4"
            />{' '}

            <label>CREDITS:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="credits"
              placeholder="0-200"
            />

            <br />
            <label>ATTENDING:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="attending"
              placeholder="Fulltime, Parttime, No"
            />

            <br />
            <label>ADVISOR:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="advisor"
            />

            <br />
            <label>HOLDS:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="holds"
            />

            <br />
            <label>REGISTRATION CODE:</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="code"
              placeholder="Registration Code"
            />
          </div>

            <br />
            <button onClick={onSubmit}
            style={btnStyles}
            className="btn-sm"
            >
            ADD STUDENT
            </button>
        </div>
  ) : null;
};

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
    marginTop: height / 25
  },
  btnStyles: {
    marginLeft: width / 5.2,
    marginBottom: height / 30
  }
};

export default AdminStudent;