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

const styles = {
  main: { marginLeft: "80px", float: "left", marginTop: 25 },
  titleBlock: {
    width: "255px",
    height: "30px",
    backgroundColor: "#F2F2F2",
    marginBottom: "0px"
  },
  title: { color: "#A42323", marginLeft: "37px", fontSize: 20 },
  bigBlock: {
    width: "255px",
    height: "500px",
    backgroundColor: "#A42323",
    marginTop: "0px"
  }
};

export default UpcomingClasses;
