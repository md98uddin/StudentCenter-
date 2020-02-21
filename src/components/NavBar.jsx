import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          backgroundColor: "#a42323",
          justifyContent: "Center",
          flex: 1
        }}
        className="navbar navbar-dark navbar-expand-lg"
      >
        <Link to="/" className="navbar-brand">
          Student Center
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/class" className="nav-link">
                CLASS
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/grades" className="nav-link">
                GRADES
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/finaid" className="nav-link">
                AIDS AND LOANS
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/advising" className="nav-link">
                ADVISING
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
