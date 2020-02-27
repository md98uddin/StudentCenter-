import React from "react";

const SignedOutNavBar = () => {
  const { innerHeight: height, innerWidth: width } = window;
  return (
    <div
      style={{
        marginLeft: width / 13,
        marginRight: height / 6.25,
        background: "#A42323",
        height: height / 11,
        fontSize: 20,
        color: "#FFFFFF",
        marginTop: width / 120,
        textAlign: "center"
      }}
      className="main"
    >
      <p style={{ marginTop: "10px", marginLeft: width / 15 }}>
        WELCOME TO STUDENT CENTER
      </p>
    </div>
  );
};

export default SignedOutNavBar;
