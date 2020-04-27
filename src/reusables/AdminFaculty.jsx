import React from "react";

const AdminFaculty = (props) => {
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

    return currentTab === "Faculty" ? (
        <div style={main} className="main">
          <div style={formDiv} className="innerInputs">

            <span><label>Name: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="name"
              placeholder="Name"
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
            <span><label>EMPLOYEE TYPE: </label> </span>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="employeeType"
              placeholder="Professor, Adviser"
            />

            <br />
            <label>ROOM:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="room"
              placeholder="Room #"
            />

            <br />
            <label>HOURS:</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="Hours"
              placeholder="2-64"
            />

            <br />
            <label>DAYS:</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="days"
              placeholder="1-7"
            />
            <br />
            <br />
            <label>DURATION:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="duration"
              placeholder="##"
            />{' '}

            <br />
            <label>FACULTY ID:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="facultyid"
              placeholder="id"
            />

            <br />
            <label>CAMPUS ID:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="attending"
              placeholder="1000-9999"
            />

            <br />
            <label>CONTACT:</label>
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="contact"
            />
            </div>

            <br />
            <button onClick={onSubmit}
            style={btnStyles}
            className="btn-sm"
            >
            ADD FACULTY
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

export default AdminFaculty;