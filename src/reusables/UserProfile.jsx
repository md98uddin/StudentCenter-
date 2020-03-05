import React from "react";
import { getDay, getMonth } from "../utils/services";

const UserProfile = props => {
  const date = {
    day: new Date().getUTCDay(),
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };

  const {
    main,
    welcomeMessageBlock,
    welcomeMessageTitle,
    profileRedBlock
  } = styles;

  return (
    <div style={main} className="main">
      <div style={welcomeMessageBlock} className="welcome-message">
        <p style={welcomeMessageTitle}>
          {" "}
          WELCOME JOHN DOE, TODAY IS{" "}
          {`${getDay(date.day)}, ${date.date} ${getMonth(date.month)} ${
            date.year
          }`}
        </p>
      </div>

      <div style={profileRedBlock} className="profile-block"></div>
    </div>
  );
};

const { innerWidth: width, innerHeight: height } = window;

const styles = {
  main: { float: "left", marginTop: width / 50, marginLeft: width / 20 },
  welcomeMessageBlock: {
    width: width / 2.2,
    height: height / 22,
    backgroundColor: "#F2F2F2",
    marginBottom: height / 100
  },
  welcomeMessageTitle: {
    color: "#A42323",
    marginLeft: width / 22.5,
    fontSize: height / 35
  },
  profileRedBlock: {
    width: width / 2.2,
    height: height / 1.3,
    backgroundColor: "#D35D5D"
  }
};

export default UserProfile;
