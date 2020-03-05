import React from "react";

const UpcomingClasses = props => {
  const { main, titleBlock, title, bigBlock } = styles;
  return (
    <div style={main} className="main">
      <div style={titleBlock} className="title-block">
        <p style={title}>UPCOMING CLASSES</p>
      </div>

      <div style={bigBlock} className="big-block"></div>
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
    marginBottom: height / 100
  },
  title: { color: "#A42323", marginLeft: width / 30, fontSize: height / 35 },
  bigBlock: {
    width: width / 5.2,
    height: height / 1.3,
    backgroundColor: "#A42323"
  }
};

export default UpcomingClasses;
