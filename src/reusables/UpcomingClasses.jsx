import React from "react";

const UpcomingClasses = props => {
  return (
    <div
      style={{ marginLeft: "80px", float: "left", marginTop: 25 }}
      className="main"
    >
      <div
        style={{
          width: "255px",
          height: "30px",
          backgroundColor: "#F2F2F2",
          marginBottom: "0px"
        }}
        className="title-block"
      >
        <p style={{ color: "#A42323", marginLeft: "37px", fontSize: 20 }}>
          UPCOMING CLASSES
        </p>
      </div>

      <div
        style={{
          width: "255px",
          height: "500px",
          backgroundColor: "#A42323",
          marginTop: "0px"
        }}
        className="big-block"
      ></div>
    </div>
  );
};

export default UpcomingClasses;
