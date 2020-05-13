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
      onDropId: null,
      addId: null,
      dropId: null,
      swapCourseAdd: null,
      swapCourseDrop: null,
      swapNext: false,
      searchQuery: null,
      fieldError: null,
      duplicateError: null,
      successMsg: null,
      onDropMsg: null,
      duplicateSwapMsg: null,
      swapSuccessMsg: null,
      urlOnLoad: this.props.urlOnLoad,
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
    if (
      prevState.user !== nextProps.user ||
      prevState.urlOnLoad !== nextProps.urlOnLoad
    ) {
      return {
        user: nextProps.user,
        urlOnLoad: nextProps.urlOnLoad,
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

  onGoBack = () => {
    this.setState({
      swapNext: false,
      dropId: null,
      addId: null,
      swapCourseAdd: null,
      swapCourseDrop: null,
    });
  };
  onSwapAdd = (courseId, courseName) => {
    this.setState({
      addId: courseId,
      swapCourseAdd: courseName,
    });
  };

  onSwapDrop = (courseId, courseName) => {
    this.setState({
      dropId: courseId,
      swapCourseDrop: courseName,
      swapNext: true,
    });
  };

  onSelect = async (obj) => {
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

  onDropId = (id) => {
    this.setState({
      onDropId: id,
      onDropMsg: null,
    });
  };

  onDrop = async (id) => {
    const { user } = this.state;
    await axios
      .post(`http://localhost:3000/students/current/remove/${user.email}/${id}`)
      .then(() => {
        window.location.reload();
      })
      .then(() => {
        var onDropMsg = "class was dropped";
        this.setState({
          onDropMsg,
        });
      });
  };

  onSwapCourse = async () => {
    const { addId, dropId, user } = this.state;
    axios
      .post(`http://localhost:3000/students/current/add/${user.email}/${addId}`)
      .then(async (res) => {
        if (res.data === "duplicate exists in current") {
          var errMsg = "course already in schedule";
          this.setState({
            duplicateSwapMsg: errMsg,
            swapSuccessMsg: null,
          });
        } else if (res.data === "course was added") {
          var successMsg = "courses were swapped";
          this.setState({
            swapSuccessMsg: successMsg,
            duplicateSwapMsg: null,
          });

          await axios
            .post(
              `http://localhost:3000/students/current/remove/${user.email}/${dropId}`
            )
            .then(async (res) => {
              if (res.data === "course was removed") {
                await axios
                  .put(
                    `http://localhost:3000/students/cart/${user.email}?id=${addId}`
                  )
                  .then((res) => {
                    window.location.reload();
                  });
              }
            });
        }
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
          })
          .then(async () => {
            window.location.reload();
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
          })
          .then(async () => {
            window.location.reload();
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
      swapCourseAdd,
      swapCourseDrop,
      swapNext,
      currentClasses,
      duplicateError,
      successMsg,
      onDropMsg,
      onDropId,
      droppedMarker,
      swapSuccessMsg,
      duplicateSwapMsg,
      urlOnLoad,
    } = this.state;

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
            privilege={user.privilege}
            urlOnLoad={urlOnLoad}
            onUrlChange={this.props.onUrlChange}
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
            onDropId={this.onDropId}
            dropId={onDropId}
            onDrop={this.onDrop}
            onDropMsg={onDropMsg}
            droppedMarker={droppedMarker}
          />
          <SwapCourse
            currentTab={currentTab}
            currentClasses={currentClasses}
            shopCart={shopCart}
            swapAdd={this.onSwapAdd}
            swapDrop={this.onSwapDrop}
            swapCourseAdd={swapCourseAdd}
            swapCourseDrop={swapCourseDrop}
            swapNext={swapNext}
            onGoBack={this.onGoBack}
            onSwapCourse={this.onSwapCourse}
            duplicateSwapMsg={duplicateSwapMsg}
            swapSuccessMsg={swapSuccessMsg}
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
