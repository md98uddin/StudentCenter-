import React from "react";
import SearchResult from "./SearchResult";

const AddCourseSearch = props => {
  const {
    currentTab,
    onChange,
    onSubmit,
    searchQuery,
    onSelect,
    shopCart
  } = props;
  const {
    overview,
    main,
    titleDiv,
    subjectDiv,
    courseNoDiv,
    btnStyles
  } = styles;

  return currentTab === "Add Courses" ? (
    <div style={overview} className="main">
      <div style={titleDiv} className="title">
        <p>SEARCH FOR CLASSES</p>
      </div>
      <div
        style={{
          backgroundColor: "#4d0917",
          borderColor: "#000000",
          border: "solid"
        }}
        className="inputs"
      >
        <div style={main} className="subject">
          <div style={subjectDiv} className="innerInputs">
            <label>SUBJECT</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="text"
              name="subject"
            />
          </div>
          <div style={courseNoDiv} className="courseNo">
            <label>COURSE NO.</label>
            <br />
            <input
              onChange={onChange}
              style={{ borderRadius: 10 }}
              type="number"
              name="courseNo"
            />
          </div>
        </div>
        <button onClick={onSubmit} style={btnStyles} className="btn-sm">
          FIND COURSES
        </button>
      </div>
      <SearchResult
        searchQuery={searchQuery}
        onSelect={onSelect}
        shopCart={shopCart}
      />
    </div>
  ) : null;
};
const { innerHeight: height, innerWidth: width } = window;

const styles = {
  overview: {
    height: height / 5,
    float: "right",
    marginTop: height / 20,
    marginRight: width / 12
  },
  main: {
    backgroundColor: "#4d0917",
    height: height / 6,
    width: width / 2.2,
    color: "#ffffff",
    display: "flex"
  },
  titleDiv: {
    height: height / 17,
    backgroundColor: "#9e151e",
    fontSize: height / 40,
    color: "#ffffff",
    border: "solid",
    borderColor: "#000000"
  },
  subjectDiv: {
    borderRadius: 10,
    marginLeft: width / 14,
    marginTop: height / 25
  },
  courseNoDiv: {
    borderRadius: 10,
    marginLeft: width / 20,
    marginTop: height / 25
  },
  btnStyles: {
    marginLeft: width / 5.2,
    borderRadius: 10,
    marginBottom: height / 30
  }
};

export default AddCourseSearch;
