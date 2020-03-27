import React from "react";
import { checkCartDuplicate } from "../utils/services";

const ShopCart = ({ currentTab, shopCart, onEnroll, currentClasses }) => {
  const { main } = styles;
  return currentTab === "View Cart" ? (
    <table style={main} className="table">
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
          <tr key={index}>
            <td>{`${course.prefix} ${course.courseNumber}`}</td>
            <td>{course.professor}</td>
            <td>{course.credits}</td>
            <td>{course.days[0].day}</td>
            <td>{course.days[0].hours}</td>
            <td>
              {checkCartDuplicate(course, currentClasses) === true ? (
                "In Schedule"
              ) : (
                <button onClick={() => onEnroll(course)} className="btn-sm">
                  Enroll
                </button>
              )}
            </td>
            <td>
              <button className="btn-sm">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

const { innerHeight: height, innerWidth: width } = window;
const styles = {
  main: {
    width: width / 2,
    marginRight: width / 13,
    marginTop: height / 16.5,
    float: "right"
  }
};

export default ShopCart;
