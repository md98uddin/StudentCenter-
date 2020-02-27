import React from "react";
import { Link } from "react-router-dom";

const CreateForgot = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div
      style={{
        width: width / 3.57,
        marginLeft: width / 2.657,
        marginRight: width / 2
      }}
    >
      <Link to="/register">
        <button
          style={{
            backgroundColor: "#5C4646",
            width: width / 8,
            height: height / 15,
            fontSize: 18,
            borderRadius: 20
          }}
          type="button"
          className="btn btn-secondary btn-lg"
        >
          <p>Create Account</p>
        </button>
      </Link>
      <Link to="/forgotPassword">
        <button
          style={{
            marginLeft: width / 35,
            backgroundColor: "#5C4646",
            width: width / 8,
            height: height / 15,
            fontSize: 18,
            borderRadius: 20
          }}
          type="button"
          className="btn btn-secondary btn-lg"
        >
          <p>Forgot Password</p>
        </button>
      </Link>
    </div>
  );
};

export default CreateForgot;
