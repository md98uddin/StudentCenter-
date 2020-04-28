import React from "react";
import { convertMilitaryTime } from "../utils/services";

const DropCourse = ({
  currentClasses,
  currentTab,
  onDropId,
  dropId,
  onDrop,
  onDropMsg,
}) => {
  const { main, dropBtnStyle, dropMsg } = styles;
  return currentTab === "Drop Courses" ? (
    <div style={main} className="container">
      <table className="table">
        <thead style={{ backgroundColor: "#9e151e", color: "#ffffff" }}>
          <tr>
            <th>Course</th>
            <th>Professor</th>
            <th>Credits</th>
            <th>Days</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#4d0917", color: "#ffffff" }}>
          {currentClasses.length >= 0 &&
            currentClasses.map((course) => (
              <tr key={course._id}>
                <td>{`${course.prefix} ${course.courseNumber}`}</td>
                <td>{course.professor}</td>
                <td>{course.credits}</td>
                <td>{course.days[0].day}</td>
                <td>{`${convertMilitaryTime(
                  course.days[0].startTime
                )}-${convertMilitaryTime(course.days[0].endTime)}`}</td>
                <td>
                  {" "}
                  {dropId !== course._id ? (
                    <button
                      onClick={() => onDropId(course._id)}
                      style={{
                        borderRadius: 10,
                        backgroundColor: "#0f0c6e",
                        color: "#ffffff",
                      }}
                      className="btn-sm"
                    >
                      Drop
                    </button>
                  ) : (
                    "selected"
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {dropId && (
        <div>
          <button
            style={dropBtnStyle}
            onClick={() => onDrop(dropId)}
            className="btn-sm "
          >
            Confirm Drop
          </button>
        </div>
      )}
      {onDropMsg && (
        <div style={dropMsg}>
          <p>{onDropMsg}</p>
        </div>
      )}
    </div>
  ) : null;
};

const { innerHeight: height, innerWidth: width } = window;
const styles = {
  main: {
    width: width / 2,
    marginRight: width / 16,
    marginTop: height / 16.5,
    float: "right",
  },
  dropBtnStyle: {
    marginLeft: width / 4.75,
    backgroundColor: "#4d0917",
    color: "white",
  },
  dropMsg: {
    backgroundColor: "#4d0917",
    color: "white",
    width: width / 10,
    borderRadius: 10,
    marginLeft: width / 5.1,
    marginTop: height / 15,
  },
};

export default DropCourse;
