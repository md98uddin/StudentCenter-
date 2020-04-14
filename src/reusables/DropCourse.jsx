import React from "react";
import { convertMilitaryTime } from "../utils/services";

const DropCourse = ({
  currentClasses,
  currentTab,
  onDropChange,
  dropCourse,
  onDrop,
  onDropMsg,
  droppedMarker,
}) => {
  const { main, onDropMsgStyle } = styles;
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
          {currentClasses.length > 0
            ? currentClasses.map((course, index) => (
                <tr key={course._id}>
                  <td>{`${course.prefix} ${course.courseNumber}`}</td>
                  <td>{course.professor}</td>
                  <td>{course.credits}</td>
                  <td>{course.days[0].day}</td>
                  <td>{`${convertMilitaryTime(
                    course.days[0].startTime
                  )}-${convertMilitaryTime(course.days[0].endTime)}`}</td>
                  <td>
                    {dropCourse !==
                    course.prefix +
                      course.courseNumber +
                      course.professor.replace(/\s/g, "") ? (
                      <button
                        onClick={() => onDropChange(course)}
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
                      <div className="container">
                        {droppedMarker === null ? (
                          <button
                            onClick={() => onDrop(course)}
                            style={{
                              borderRadius: 10,
                              color: "#ffffff",
                            }}
                            className="btn-sm btn-warning"
                          >
                            Confirm?
                          </button>
                        ) : (
                          <p>Dropped</p>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {currentClasses.length > 0 ? (
        <div style={onDropMsgStyle} className="container">
          <p style={{ paddingTop: height / 70 }}>{onDropMsg}</p>
        </div>
      ) : null}
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
  onDropMsgStyle: {
    backgroundColor: "#4d0917",
    width: width / 6.3,
    height: height / 15,
    borderRadius: 15,
    marginLeft: width / 5.7,
    color: "#ffffff",
  },
};

export default DropCourse;
