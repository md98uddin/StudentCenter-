import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { checkCartDuplicate } from "../utils/services";
import axios from "axios";
import Navbar from "./NavBar";
import ClassesTab from "../reusables/ClassesTab";
import Schedule from "../reusables/Schedule";
import AddCourseSearch from "../reusables/AddCourseSearch";
import ShopCart from "../reusables/ShopCart";

class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      courses: this.props.courses,
      currentTab: "View Cart",
      currentClasses: [],
      shopCart: [],
      subject: null,
      courseNo: null,
      searchQuery: null,
      fieldError: null,
      courseExists: false
    };
  }

  async componentDidMount() {
    const { user } = this.state;
    if (user) {
      await axios
        .get(`http://localhost:3000/students/cart/${user.email}`)
        .then(res => {
          this.setState({ shopCart: res.data });
        });
      await axios
        .get(`http://localhost:3000/students/current/${user.email}`)
        .then(res => {
          this.setState({ currentClasses: res.data });
        });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.user) {
      return {
        user: nextProps.user
      };
    }
    return null;
  }

  onTabChange = tab => {
    this.setState({
      currentTab: tab
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSelect = async obj => {
    const { user, shopCart } = this.state;
    const courseExist = checkCartDuplicate(obj, shopCart);
    if (courseExist !== true) {
      await axios
        .post(`http://localhost:3000/students/cart/${user.email}`, obj)
        .then(async () => {
          const res = await axios.get(
            `http://localhost:3000/students/cart/${user.email}`
          );
          this.setState({ shopCart: res.data });
        });
    }
  };

  onSubmit = async e => {
    e.preventDefault();
    const { courses, subject, courseNo, user } = this.state;

    if (user) {
      if (!subject || !courseNo) {
        var fieldErrorMessage = "both field is required";
        this.setState({
          fieldError: fieldErrorMessage
        });
      } else if (subject !== null && courseNo !== null) {
        const filter = await axios.get(
          `http://localhost:3000/courses?campusId=${user.campusId}&prefix=${subject}&courseNumber=${courseNo}`
        );
        this.setState({ searchQuery: filter.data });
      }
    }
  };

  onEnroll = async obj => {
    const { user, currentClasses } = this.state;
    const courseExists = checkCartDuplicate(obj, currentClasses);
    if (courseExists !== true) {
      await axios.post(
        `http://localhost:3000/students/cart/${user.email}`,
        obj
      );
      await axios
        .get(`http://localhost:3000/students/cart/${user.email}`)
        .then(res => {
          this.setState({ currentClasses: res.data });
        });
    }
  };

  render() {
    const {
      user,
      currentTab,
      subject,
      courseNo,
      searchQuery,
      shopCart,
      currentClasses
    } = this.state;
    console.log("current classes", currentClasses);

    return user ? (
      <div className="main">
        <div
          style={{
            height: "100vh",
            backgroundColor: "#A4A4A4"
          }}
        >
          <Navbar
            signOutStudent={this.props.signOutStudent}
            campus={user.campusId}
          />
          <Schedule currentTab={currentTab} />
          <AddCourseSearch
            currentTab={currentTab}
            subject={subject}
            courseNo={courseNo}
            searchQuery={searchQuery}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            onSelect={this.onSelect}
            shopCart={shopCart}
          />
          <ShopCart
            currentTab={currentTab}
            currentClasses={currentClasses}
            shopCart={shopCart}
            onEnroll={this.onEnroll}
          />
          <ClassesTab onTabChange={this.onTabChange} currentTab={currentTab} />
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Classes;
