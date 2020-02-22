import React from "react";
import { getDay, getMonth } from "../utils/services";

const UserProfile = props => {
  const date = {
    day: new Date().getUTCDay(),
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };

  return (
    <div style={{ marginTop: "0px" }} className="main">
      <div
        style={{
          width: "550px",
          height: "30px",
          backgroundColor: "#f2f2f2",
          marginBottom: "5px"
        }}
        className="welcome-message"
      >
        <p style={{ color: "#A42323", marginLeft: "45px" }}>
          {" "}
          WELCOME JOHN DOE, TODAY IS{" "}
          {`${getDay(date.day)}, ${date.date} ${getMonth(date.month)} ${
            date.year
          }`}
        </p>
      </div>

      <div
        style={{
          width: "550px",
          height: "465px",
          backgroundColor: "#A42323",
          marginTop: "0px"
        }}
        className="profile-block"
      ></div>
    </div>
  );
};

export default UserProfile;
