import React from "react";

const AdminTab = props => {
  const { onTabChange, currentTab } = props;
  const { btnStyles, main } = styles;
  return (
    <div style={main} className="main">
      <button
        onClick={() => onTabChange("Students")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "Students" ? "btn-info active" : null
        }`}
      >
        STUDENTS
      </button>
      <br />
      <button
        onClick={() => onTabChange("Faculty")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "Faculty" ? "btn-info active" : null
        }`}
      >
        FACULTY
      </button>
      <br />
      <button
        onClick={() => onTabChange("Courses")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "Courses" ? "btn-info active" : null
        }`}
      >
        COURSES
      </button>
      <br />
      </div>
  );
};

const { innerHeight: height, innerWidth: width } = window;

const styles = {
    main: {
      width: width / 6,
      height: height / 1.8,
      backgroundColor: "#9e151e",
      marginLeft: width / 15,
      marginTop: height / 20,
      border: "solid",
      borderRadius: 20
    },
    btnStyles: {
      marginLeft: width / 45,
      marginBottom: height / 1000,
      borderRadius: 20,
      border: "none",
      borderColor: "#ffffff",
      marginTop: height / 14,
      height: height / 12,
      width: width / 8
    }
  };
  
  export default AdminTab;