import React from "react";
import { convertMilitaryTime, upcomingSchedule } from "../utils/services";

const UpcomingClasses = (props) => {
  const {
    main,
    titleBlock,
    title,
    bigBlock,
    classDiv,
    classHead,
    classProf,
    classHours,
    classRoom,
  } = styles;
  var top3 = props.currentClasses.slice(0, 3);
  if (top3)
    return (
      <div style={main} className="main">
        <div style={titleBlock} className="title-block">
          <p style={title}>UPCOMING CLASSES</p>
        </div>
        <div style={bigBlock} className="big-block">
          <div style={{ margin: "5px 10px 5px 5px" }} className="classList">
            <br />
            <br />
            {top3.map((classes, i) => (
              <div key={i} style={classDiv} className="classBlock">
                <h3
                  style={classHead}
                  className="classTitle"
                >{`${classes.prefix} ${classes.courseNumber}`}</h3>
                <p style={classProf}>{classes.professor}</p>
                <p style={classHours}>{`${convertMilitaryTime(
                  classes.days[0].startTime
                )}-${convertMilitaryTime(classes.days[0].endTime)}`}</p>
                <p style={classRoom}>{classes.room}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

const { innerWidth: width, innerHeight: height } = window;
const styles = {
  main: { marginLeft: width / 30, float: "left", marginTop: width / 50 },
  titleBlock: {
    width: width / 5.2,
    height: height / 22,
    backgroundColor: "#F2F2F2",
    marginBottom: height / 100,
  },
  title: { color: "#A42323", marginLeft: width / 30, fontSize: height / 35 },
  bigBlock: {
    width: width / 5.2,
    height: height / 1.3,
    backgroundColor: "#A42323",
  },
  classDiv: {
    backgroundColor: "#d0d5db",
    marginLeft: width / 300,
  },
  classHead: {
    fontSize: height / 35,
    marginLeft: width / 25,
    color: "#A42323",
  },
  classProf: {
    marginLeft: width / 25,
    fontSize: height / 45,
    color: "#A42323",
  },
  classHours: {
    marginLeft: width / 25,
    fontSize: height / 45,
    color: "#A42323",
  },
  classRoom: {
    marginLeft: width / 25,
    fontSize: height / 45,
    color: "#A42323",
  },
};

export default UpcomingClasses;
