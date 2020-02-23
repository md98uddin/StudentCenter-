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

const styles = {
  main: { float: "left", marginTop: 25, marginLeft: 63 },
  welcomeMessageBlock: {
    width: "600px",
    height: "30px",
    backgroundColor: "#F2F2F2",
    marginBottom: "5px"
  },
  welcomeMessageTitle: { color: "#A42323", marginLeft: "60px", fontSize: 18 },
  profileRedBlock: {
    width: "600px",
    height: "495px",
    backgroundColor: "#D35D5D"
  }
};

export default UserProfile;
