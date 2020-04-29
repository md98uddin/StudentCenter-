import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCampus } from "../utils/services";

export default class Navbar extends Component {
  render() {
    const path = window.location.pathname;
    const {
      main,
      tabMargin,
      ButtonDiv,
      faqButtonStyle,
      faqButtonLabel,
      logOutButtonStyle,
      logOutButtonLabel,
    } = styles;
    console.log("priv", this.props.privilege);
    return !this.props.privilege ? (
      <nav style={main} className="navbar navbar-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          {getCampus(this.props.campus)}
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li
              style={tabMargin}
              className={
                path.includes("/home") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/home" className="nav-link">
                HOME
              </Link>
            </li>
            <li
              style={tabMargin}
              className={
                path.includes("/classes") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/classes" className="nav-link">
                CLASS
              </Link>
            </li>
            <li
              style={tabMargin}
              className={
                path.includes("/grades") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/grades" className="nav-link">
                GRADES
              </Link>
            </li>
            <li
              style={tabMargin}
              className={
                path.includes("/finaid") ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/finaid" className="nav-link">
                AIDS AND LOANS
              </Link>
            </li>
            <li
              style={tabMargin}
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
            <li
              style={tabMargin}
              className={
                path.includes("/admin") ? "navbar-item active" : "navbar-item"
              }
            ></li>
          </ul>
          <div style={ButtonDiv}>
            <button
              style={faqButtonStyle}
              type="button"
              className="btn btn-warning"
            >
              <Link to="/faq" className="nav-link">
                <p style={faqButtonLabel}>FAQ</p>
              </Link>
            </button>
            <button
              style={logOutButtonStyle}
              onClick={() => this.props.signOutStudent()}
              type="button"
              className="btn btn-danger"
            >
              <p style={logOutButtonLabel}>Log Out</p>
            </button>
          </div>
        </div>
      </nav>
    ) : (
      <nav style={main} className="navbar navbar-dark navbar-expand-lg">
        <li
          style={{
            marginBottom: window.innerHeight / 50,
            marginRight: window.innerWidth / 10,
            color: "#ffffff",
          }}
        >
          <p>Admin: {this.props.adminName}</p>
        </li>
        <div style={ButtonDiv}>
          <button
            style={faqButtonStyle}
            type="button"
            className="btn btn-warning"
          >
            <Link to="/faq" className="nav-link">
              <p style={faqButtonLabel}>FAQ</p>
            </Link>
          </button>
          <button
            style={logOutButtonStyle}
            onClick={() => this.props.signOutStudent()}
            type="button"
            className="btn btn-danger"
          >
            <p style={logOutButtonLabel}>Log Out</p>
          </button>
        </div>
      </nav>
    );
  }
}

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  main: {
    backgroundColor: "#a42323",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: height / 15,
  },
  tabMargin: { marginLeft: width / 28 },
  ButtonDiv: { marginRight: width / 51 },
  faqButtonStyle: {
    marginLeft: width / 20,
    marginRight: width / 70,
    width: width / 13,
    height: height / 22,
    alignItems: "center",
  },
  faqButtonLabel: { margin: "-12px 5px 100px 5px" },
  logOutButtonStyle: {
    marginLeft: width / 140,
    marginRight: width / 70,
    width: width / 13,
    height: height / 22,
  },
  logOutButtonLabel: { margin: "-5px 5px 10px 5px" },
};
