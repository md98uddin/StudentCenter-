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
    profileRedBlock,
    textStyle,
    textSize,
    studentStyle,
    statusStyle
  } = styles;

  return (
    <div style={main} className="main">
      <div style={welcomeMessageBlock} className="welcome-message">
        <p style={welcomeMessageTitle}>
          {" "}
          <span>WELCOME {props.firstName} {props.lastName}
          , TODAY IS{" "}</span>
          {`${getDay(date.day)}, 
            ${date.date},
            ${getMonth(date.month)},
            ${date.year}`}
        </p>
      </div>
      <div style={profileRedBlock} className="profile-block">
        <p style={textStyle}>
          <br />
          <view style={studentStyle}>Student ID: {props.studentId}</view>
          <view style={statusStyle}>Status: {props.attending}</view>
          <br /><br />
          <img src={'https://bit.ly/2KL4rwi'} alt="ProfilePic" width="20%" />
          <br />
          <view style={textSize}>Email: </view> {props.email}
          <br />
          <view style={textSize}>Gender: </view>{props.gender}
          <br />
          <view style={textSize}>Year: </view>{props.year}
          <br />
          <view style={textSize}>Campus ID: </view>{props.campusId}
          <br />
          <view style={textSize}>Current Major: </view>{props.major}
          <br />
          <view style={textSize}>Current GPA: </view>{props.gpa}
          <br />
          <view style={textSize}>Total Earned Credits: </view>{props.credits}
          <br />
        </p>
      </div>
    </div>
  );
};

const { innerWidth: width, innerHeight: height } = window;

const styles = {
  main: {
    float: "left",
    marginTop: width / 50,
    marginLeft: width / 20
  },
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
  },
  textStyle: {
    color: "#d8f2eb",
    textAlign: "center",
    textShadow: "0 0 5px black"
  },
  textSize: {
    color: "#ffffff",
    textShadow: "0 0 5px black",
    fontSize: height/30
  },
  studentStyle: {
    color: "#ffffff",
    textShadow: "0 0 5px black",
    fontSize: height/30,
    float: "left",
    marginLeft: width/40
  },
  statusStyle: {
    color: "#ffffff",
    textShadow: "0 0 5px black",
    fontSize: height/30,
    float: "right",
    marginRight: width/15
  }
};

export default UserProfile;
