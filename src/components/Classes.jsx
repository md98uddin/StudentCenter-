import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { checkCartDuplicate } from "../utils/services";
import axios from "axios";
import Navbar from "./NavBar";
import ClassesTab from "../reusables/ClassesTab";
import Schedule from "../reusables/Schedule";
import AddCourseSearch from "../reusables/AddCourseSearch";
import ShopCart from "../reusables/ShopCart";
import DropCourse from "../reusables/DropCourse";
import SwapCourse from "../reusables/SwapCourse";

class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      courses: this.props.courses,
      currentTab: "View Schedule",
      currentClasses: [],
      shopCart: [],
      subject: null,
      courseNo: null,
      dropCourse: null,
      droppedMarker: null,
      swapDrop: null,
      swapAdd: null,
      searchQuery: null,
      fieldError: null,
      duplicateError: null,
      successMsg: null,
      onDropMsg: "please refresh for update!",
    };
  }

  async componentDidMount() {
    const { user } = this.state;
    if (user) {
      await axios
        .get(`http://localhost:3000/students/cart/${user.email}`)
        .then((res) => {
          this.setState({ shopCart: res.data });
        });
      await axios
        .get(`http://localhost:3000/students/current/${user.email}`)
        .then((res) => {
          this.setState({ currentClasses: res.data });
        });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.user) {
      return {
        user: nextProps.user,
      };
    }
    return null;
  }

  onTabChange = (tab) => {
    this.setState({
      currentTab: tab,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSwapAdd = (selectedOption) => {
    this.setState(
      {
        swapAdd: selectedOption.prefix + selectedOption.courseNumber,
      },
      console.log("swap add click", this.state.swapAdd)
    );
  };

  onSwapDrop = (selectedOption) => {
    this.setState(
      {
        swapDrop: selectedOption.prefix + selectedOption.courseNumber,
      },
      console.log("swap drop click", this.state.swapDrop)
    );
  };

  onSelect = async (obj) => {
    const { user, shopCart } = this.state;
    const courseExist = checkCartDuplicate(obj, shopCart);
    console.log("on select", courseExist);
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

  onDropChange = (obj) => {
    const identifer =
      obj.prefix + obj.courseNumber + obj.professor.replace(/\s/g, "");
    this.setState({
      dropCourse: identifer,
      droppedMarker: null,
    });
  };

  onDrop = async (obj) => {
    const { user } = this.state;
    const identifer =
      obj.prefix + obj.courseNumber + obj.professor.replace(/\s/g, "");
    this.setState({
      droppedMarker: identifer,
    });
    await axios
      .post(`http://localhost:3000/students/remove/${user.email}`, obj)
      .then(async (res) => {
        this.setState({
          dropCourse: null,
        });
        await axios
          .get(`http://localhost:3000/students/current/${user.email}`)
          .then(async (res) => {
            this.setState({
              currentClasses: res.data,
            });
          });
      });
  };

  onEnroll = async (obj) => {
    const { user } = this.state;
    await axios
      .get(`http://localhost:3000/students/current/${user.email}?id=${obj._id}`)
      .then(async (res) => {
        if (res.data === "course exists") {
          var duplicateErrorMsg = "course already in schedule";
          this.setState({
            duplicateError: duplicateErrorMsg,
            successMsg: null,
          });
        } else if (
          res.data === "none matched" ||
          res.data === "no course match id"
        ) {
          await axios
            .post(`http://localhost:3000/students/current/${user.email}`, obj)
            .then(() => {
              var successMessage = "course was added to schedule";
              this.setState({
                successMsg: successMessage,
                duplicateError: null,
              });
            });
        }
      })
      .then(async () => {
        await axios.put(
          `http://localhost:3000/students/cart/${user.email}?id=${obj._id}`
        );
      })
      .finally(async () => {
        await axios
          .get(`http://localhost:3000/students/cart/${user.email}`)
          .then((res) => {
            this.setState({ shopCart: res.data });
          });
      });
  };

  onRemoveCart = async (id) => {
    const { user } = this.state;
    await axios
      .put(`http://localhost:3000/students/cart/${user.email}?id=${id}`)
      .then(async () => {
        await axios
          .get(`http://localhost:3000/students/cart/${user.email}`)
          .then((res) => {
            this.setState({
              shopCart: res.data,
              duplicateError: null,
              successMsg: null,
            });
          });
      });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { subject, courseNo, user } = this.state;

    if (user) {
      if (!subject || !courseNo) {
        var fieldErrorMessage = "both field is required";
        this.setState({
          fieldError: fieldErrorMessage,
        });
      } else if (subject !== null && courseNo !== null) {
        const filter = await axios.get(
          `http://localhost:3000/courses?campusId=${user.campusId}&prefix=${subject}&courseNumber=${courseNo}`
        );
        this.setState({ searchQuery: filter.data });
      }
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
      dropCourse,
      swapAdd,
      swapDrop,
      currentClasses,
      duplicateError,
      successMsg,
      onDropMsg,
      droppedMarker,
    } = this.state;

    console.log("swapDrop", swapDrop);
    console.log("swapAdd", swapAdd);
    return user ? (
      <div className="main">
        <div
          style={{
            height: "100vh",
            backgroundColor: "#A4A4A4",
          }}
        >
          <Navbar
            signOutStudent={this.props.signOutStudent}
            campus={user.campusId}
          />
          <Schedule currentTab={currentTab} currentClasses={currentClasses} />
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
            shopCart={shopCart}
            onEnroll={this.onEnroll}
            onRemoveCart={this.onRemoveCart}
            duplicateError={duplicateError}
            successMsg={successMsg}
          />
          <DropCourse
            currentClasses={currentClasses}
            currentTab={currentTab}
            onDropChange={this.onDropChange}
            dropCourse={dropCourse}
            onDrop={this.onDrop}
            onDropMsg={onDropMsg}
            droppedMarker={droppedMarker}
          />
          <SwapCourse
            currentTab={currentTab}
            currentClasses={currentClasses}
            shopCart={shopCart}
            onChangeSwapAdd={this.onSwapAdd}
            onChangeSwapDrop={this.onSwapDrop}
            swapAdd={swapAdd}
            swapDrop={swapDrop}
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
