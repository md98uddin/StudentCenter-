import React from "react";
import { convertMilitaryTime } from "../utils/services";

const ShopCart = ({
  currentTab,
  shopCart,
  onEnroll,
  successMsg,
  duplicateError,
  onRemoveCart,
}) => {
  const { main, duplicateErrStyle, successMsgStyle } = styles;
  return currentTab === "View Cart" ? (
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
            <th></th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#4d0917", color: "#ffffff" }}>
          {shopCart.map((course, index) => (
            <tr key={course._id}>
              <td>{`${course.prefix} ${course.courseNumber}`}</td>
              <td>{course.professor}</td>
              <td>{course.credits}</td>
              <td>{course.days[0].day}</td>
              <td>{`${convertMilitaryTime(
                course.days[0].startTime
              )}-${convertMilitaryTime(course.days[0].endTime)}`}</td>
              <td>
                {
                  <button
                    style={{
                      borderRadius: 10,
                      backgroundColor: "#0f0c6e",
                      color: "#ffffff",
                    }}
                    onClick={() => onEnroll(course)}
                    className="btn-sm"
                  >
                    Enroll
                  </button>
                }
              </td>
              <td>
                <button
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#9e151e",
                    color: "#ffffff",
                  }}
                  className="btn-sm"
                  onClick={() => onRemoveCart(course._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {successMsg ? (
        <div style={successMsgStyle} className="successMsg">
          <p>{successMsg}</p>
        </div>
      ) : null}
      {duplicateError ? (
        <div style={duplicateErrStyle} className="duplicateErr">
          <p>{duplicateError}</p>
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
  duplicateErrStyle: {
    width: width / 7,
    height: height / 20,
    marginLeft: width / 5.7,
    color: "#ffffff",
    backgroundColor: "#1e19a6",
    borderRadius: 10,
  },
  successMsgStyle: {
    width: width / 6,
    height: height / 20,
    marginLeft: width / 5.9,
    color: "#ffffff",
    backgroundColor: "#4a8a48",
    borderRadius: 10,
  },
};

export default ShopCart;
