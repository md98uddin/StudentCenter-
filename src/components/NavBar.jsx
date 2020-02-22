import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          backgroundColor: "#a42323",
          justifyContent: "Center",
          flex: 1,
          width: "1200px",
          marginLeft: "80px"
        }}
        className="navbar navbar-dark navbar-expand-lg"
      >
        <Link to="/" className="navbar-brand">
          Martian College
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li style={{ marginLeft: 25 }} className="navbar-item">
              <Link to="/home" className="nav-link">
                HOME
              </Link>
            </li>
            <li style={{ marginLeft: 25 }} className="navbar-item">
              <Link to="/classes" className="nav-link">
                CLASS
              </Link>
            </li>
            <li style={{ marginLeft: 25 }} className="navbar-item">
              <Link to="/grades" className="nav-link">
                GRADES
              </Link>
            </li>
            <li style={{ marginLeft: 25 }} className="navbar-item">
              <Link to="/finaid" className="nav-link">
                AIDS AND LOANS
              </Link>
            </li>
            <li style={{ marginLeft: 25 }} className="navbar-item">
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
                height: 40
              }}
              type="button"
              className="btn btn-warning"
            >
              FAQ
            </button>
            <button
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                width: 100,
                height: 40
              }}
              onClick={() => this.props.signOutStudent()}
              type="button"
              className="btn btn-danger"
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
