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
    <div
      style={{ float: "left", marginTop: 25, marginLeft: 63 }}
      className="main"
    >
      <div
        style={{
          width: "600px",
          height: "30px",
          backgroundColor: "#F2F2F2",
          marginBottom: "5px"
        }}
        className="welcome-message"
      >
        <p style={{ color: "#A42323", marginLeft: "60px", fontSize: 18 }}>
          {" "}
          WELCOME JOHN DOE, TODAY IS{" "}
          {`${getDay(date.day)}, ${date.date} ${getMonth(date.month)} ${
            date.year
          }`}
        </p>
      </div>

      <div
        style={{
          width: "600px",
          height: "495px",
          backgroundColor: "#D35D5D"
        }}
        className="profile-block"
      ></div>
    </div>
  );
};

export default UserProfile;
