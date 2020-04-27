import React from "react";

const AdminCourses = (props) => {
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

    return currentTab === "Courses" ? (
        <div style={main} className="main">
          <div style={formDiv} className="innerInputs">

            <span><label>PREFIX: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="prefix"
              placeholder="CSCI, MATH, ECON, LANG"
            />

            <br />
            <span><label>DEPARTMENT: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="department"
              placeholder="Math, Comp Sci, Romance Language, Business"
            />{' '}

            <br />
            <span><label>COURSE #: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="courseNumber"
              placeholder="1000-99999"
            />

            <br />
            <label>PROFESSOR:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="professor"
              placeholder="Professor"
            />

            <br />
            <label>ROOM:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="room"
              placeholder="room number"
            />

            <br />
            <label>DAYS:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="days"
              placeholder="1-7"
            />

            <br />
            <label>CREDITS:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="credits"
              placeholder="0-5.5"
            />{' '}

            <br />
            <label>SEMESTER:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="semester"
              placeholder="Fall, Spring, Summer, Winter"
            />

            <br />
            <label>YEAR:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="year"
              placeholder="####"
            />

            <br />
            <label>CAMPUS:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="campus"
              placeholder="Hunter College, City College"
            />

            <br />
            <label>CAMPUS ID:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="campusid"
              placeholder="1000-9999"
            />

            <br />
            <label>SECTION:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="section"
              placeholder="1-10000"
            />
            </div>

            <br />
            <button onClick={onSubmit}
            style={btnStyles}
            className="btn-sm"
            >
            ADD COURSES
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

export default AdminCourses;