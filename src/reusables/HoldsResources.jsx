import React from "react";

const HoldsResources = props => {
  return (
    <div
      style={{
        marginTop: 25,
        marginLeft: 63,
        display: "inline-block"
      }}
      className="main"
    >
      <div
        style={{
          width: "220px",
          height: "30px",
          backgroundColor: "#F2F2F2",
          marginBottom: "0px"
        }}
        className="hold-title-block"
      >
        <p style={{ color: "#A42323", marginLeft: "80px", fontSize: 20 }}>
          HOLDS
        </p>
      </div>

      <div
        style={{
          width: "220px",
          height: "147px",
          backgroundColor: "#A42323",
          marginTop: "0px"
        }}
        className="hold-big-block"
      ></div>
      <div
        style={{
          width: "220px",
          height: "30px",
          backgroundColor: "#F2F2F2",
          marginBottom: "0px"
        }}
        className="hold-title-block"
      >
        <p style={{ color: "#A42323", marginLeft: "60px", fontSize: 20 }}>
          MY ADVISER
        </p>
      </div>

      <div
        style={{
          width: "220px",
          height: "147px",
          backgroundColor: "#A42323",
          marginTop: "0px"
        }}
        className="hold-big-block"
      ></div>
      <div
        style={{
          width: "220px",
          height: "30px",
          backgroundColor: "#F2F2F2",
          marginBottom: "0px"
        }}
        className="hold-title-block"
      >
        <p style={{ color: "#A42323", marginLeft: "63px", fontSize: 20 }}>
          RESOURCES
        </p>
      </div>

      <div
        style={{
          width: "220px",
          height: "147px",
          backgroundColor: "#A42323",
          marginTop: "0px"
        }}
        className="hold-big-block"
      ></div>
    </div>
  );
};

export default HoldsResources;
