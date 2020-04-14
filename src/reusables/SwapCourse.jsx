import React from "react";
import Select from "react-select";

const SwapCourse = (props) => {
  const {
    currentTab,
    currentClasses,
    shopCart,
    swapAdd,
    swapDrop,
    onChangeSwapAdd,
    onChangeSwapDrop,
  } = props;
  const { main, swapAddStyle, swapDropStyle } = styles;

  console.log("swap current classes", currentClasses);
  console.log("swap shop classes", shopCart);

  return currentTab === "Swap Courses" ? (
    <div style={main} className="main">
      <div style={swapDropStyle} className="inSchedule">
        <Select
          value={swapDrop}
          onChange={onChangeSwapDrop}
          options={currentClasses}
          placeholder="Course to Drop"
        />
      </div>
      <div style={swapAddStyle} className="inCart">
        <Select
          value={swapAdd}
          onChange={onChangeSwapAdd}
          options={shopCart}
          placeholder="Course to Add"
        />
      </div>
    </div>
  ) : null;
};

const { innerWidth: width, innerHeight: height } = window;

const styles = {
  main: {
    float: "right",
    display: "flex",
    marginRight: width / 6,
    marginTop: height / 17,
  },
  swapAddStyle: {
    width: width / 5,
    color: "#000000",
    backgroundColor: "#000000",
  },
  swapDropStyle: { width: width / 5, marginRight: width / 50 },
};

export default SwapCourse;
