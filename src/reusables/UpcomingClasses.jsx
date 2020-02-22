import React from "react";

const UpcomingClasses = props => {
  return (
    <div
      style={{
        marginLeft: "80px",
        marginTop: "20px",
        width: "255px",
        height: "500px",
        backgroundColor: "#A42323",
        zIndex: 0
      }}
      className="main"
    >
      <div
        style={{
          width: "255px",
          height: "30px",
          background: "#A42323",
          borderBlockColor: "#707070",
          zIndex: 20
        }}
        className="title-block"
      >
        <p
          style={{
            marginLeft: "50px",
            marginTop: "20px",
            color: "#FFFFFF",
            fontSize: 20
          }}
        >
          Upcoming Classes
        </p>
      </div>
    </div>
  );
};

export default UpcomingClasses;
