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
        alignSelf: "center"
      }}
      className="main"
    >
      <p style={{ color: "#FFFFFF", fontSize: 22 }}>
        WELCOME TO STUDENT CENTER
      </p>
    </div>
  );
};

export default SignedOutNavBar;
