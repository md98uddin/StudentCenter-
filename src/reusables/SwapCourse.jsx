import React from "react";
import { convertMilitaryTime } from "../utils/services";

const SwapCourse = (props) => {
  const {
    currentClasses,
    currentTab,
    shopCart,
    swapDrop,
    swapAdd,
    swapNext,
    onGoBack,
    swapCourseAdd,
    swapCourseDrop,
    onSwapCourse,
    swapSuccessMsg,
  } = props;
  const {
    main,
    scheduleTitle,
    goBackBtn,
    swapBtn,
    btnDiv,
    summaryDiv,
    swapMsg,
  } = styles;
  console.log("initial swapNext", swapNext);
  return currentTab === "Swap Courses" ? (
    <div style={main} className="main">
      <div className="swap">
        {!swapNext ? (
          <div className="drop">
            <div style={scheduleTitle}>
              <p style={{ marginLeft: window.innerWidth / 5.2 }}>
                Classes In Schedule
              </p>
            </div>
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
                {currentClasses.length > 0 &&
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
                        <button
                          onClick={() =>
                            swapDrop(
                              course._id,
                              course.prefix + " " + course.courseNumber
                            )
                          }
                          className="btn-sm btn-success"
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="add">
            <div style={scheduleTitle}>
              <p style={{ marginLeft: window.innerWidth / 5.2 }}>
                Classes In Shop
              </p>
            </div>
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
                {shopCart.length > 0 &&
                  shopCart.map((course) => (
                    <tr key={course._id}>
                      <td>{`${course.prefix} ${course.courseNumber}`}</td>
                      <td>{course.professor}</td>
                      <td>{course.credits}</td>
                      <td>{course.days[0].day}</td>
                      <td>{`${convertMilitaryTime(
                        course.days[0].startTime
                      )}-${convertMilitaryTime(course.days[0].endTime)}`}</td>
                      <td>
                        <button
                          onClick={() =>
                            swapAdd(
                              course._id,
                              course.prefix + " " + course.courseNumber
                            )
                          }
                          className="btn-sm btn-success"
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div style={summaryDiv} className="summary">
              <p>
                Course to Drop:{" "}
                {swapCourseDrop ? swapCourseDrop : "Not selected"}
              </p>
              <p>
                Course to Add: {swapCourseAdd ? swapCourseAdd : "Not selected"}{" "}
              </p>
            </div>
            <div style={btnDiv} className="btnDiv">
              <button
                style={goBackBtn}
                onClick={() => onGoBack()}
                className="btn-sm"
              >
                Go Back
              </button>
              {swapCourseAdd && (
                <button
                  style={swapBtn}
                  onClick={() => onSwapCourse()}
                  className="btn-sm"
                >
                  Swap Courses
                </button>
              )}
            </div>
          </div>
        )}
        {swapSuccessMsg && (
          <div style={swapMsg}>
            <p>{swapSuccessMsg}</p>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  main: {
    width: width / 2,
    marginRight: width / 16,
    marginTop: height / 5,
    float: "right",
  },
  scheduleTitle: {
    backgroundColor: "#9e151e",
    color: "#ffffff",
    fontSize: width / 65,
    borderRadius: 10,
  },
  goBackBtn: { backgroundColor: "#4d0917", color: "#ffffff" },
  swapBtn: {
    backgroundColor: "#4d0917",
    color: "#ffffff",
    marginLeft: width / 40,
  },
  btnDiv: { marginLeft: width / 5.5 },
  summaryDiv: {
    backgroundColor: "#4d0917",
    color: "#ffffff",
    borderRadius: 10,
    marginTop: height / 20,
  },
  swapMsg: {
    backgroundColor: "#4d0917",
    color: "white",
    width: width / 8,
    borderRadius: 10,
    marginLeft: width / 5.1,
    marginTop: height / 15,
  },
};

export default SwapCourse;
