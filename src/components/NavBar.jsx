import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const path = window.location.pathname;
    const { innerHeight: height, innerWidth: width } = window;
    console.log("width", width);
    console.log("height", height);
    console.log(path);
    return (
      <nav
        style={{
          backgroundColor: "#a42323",
          justifyContent: "Center",
          display: "flex",
          width: "90%",
          alignItems: "center",
          height: "40px",
          marginTop: "10px"
        }}
        className="navbar navbar-dark navbar-expand-lg"
      >
        <Link to="/" className="navbar-brand">
          Martian College
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li
              style={{ marginLeft: 25 }}
              className={
                path.includes("/home") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/home" className="nav-link">
                HOME
              </Link>
            </li>
            <li
              style={{ marginLeft: 25 }}
              className={
                path.includes("/classes") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/classes" className="nav-link">
                CLASS
              </Link>
            </li>
            <li
              style={{ marginLeft: 25 }}
              className={
                path.includes("/grades") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/grades" className="nav-link">
                GRADES
              </Link>
            </li>
            <li
              style={{ marginLeft: 25 }}
              className={
                path.includes("/finaid") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/finaid" className="nav-link">
                AIDS AND LOANS
              </Link>
            </li>
            <li
              style={{ marginLeft: 25 }}
              className={
                path.includes("/advising")
                  ? "navbar-item active"
                  : "navbar-item"
              }
            >
              <Link to="/advising" className="nav-link">
                ADVISING
              </Link>
            </li>
          </ul>
          <div style={{ marginRight: "100px" }}>
            <button
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                width: 100,
                height: 30,
                alignItems: "center"
              }}
              type="button"
              className="btn btn-warning"
            >
              <p style={{ margin: "-5px 5px 10px 5px" }}>FAQ</p>
            </button>
            <button
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                width: 100,
                height: 30
              }}
              onClick={() => this.props.signOutStudent()}
              type="button"
              className="btn btn-danger"
            >
              <p style={{ margin: "-5px 5px 10px 5px" }}>Log Out</p>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
