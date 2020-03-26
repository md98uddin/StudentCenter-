import React from "react";
import CourseSearch from "./CourseSearch";

const ClassesTab = props => {
  const { onTabChange, currentTab } = props;
  const { btnStyles, main } = styles;
  return (
    <div style={main} className="main">
      <button
        onClick={() => onTabChange("View Schedule")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "View Schedule" ? "btn-info active" : null
        }`}
      >
        VIEW SCHEDULE
      </button>
      <br />
      <button
        onClick={() => onTabChange("View Cart")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "View Cart" ? "btn-info active" : null
        }`}
      >
        VIEW SHOPPING CART
      </button>
      <br />
      <button
        onClick={() => onTabChange("Add Courses")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "Add Courses" ? "btn-info active" : null
        }`}
      >
        ADD COURSES
      </button>
      <br />
      <button
        onClick={() => onTabChange("Drop Courses")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "Drop Courses" ? "btn-info active" : null
        }`}
      >
        DROP COURSES
      </button>
      <br />
      <button
        onClick={() => onTabChange("Swap Courses")}
        style={btnStyles}
        className={`btn-sm ${
          currentTab === "Swap Courses" ? "btn-info active" : null
        }`}
      >
        SWAP COURSES
      </button>
    </div>
  );
};

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  main: {
    width: width / 6,
    height: height / 1.15,
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

export default ClassesTab;
