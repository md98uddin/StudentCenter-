import React from "react";

const AdviserCard = props => {
  const {
    main,
    adviserCardDiv,
    titleBlock,
    title,
    bigBlock,
    header,
    headerBig,
    biggerBlock,
    titleBlock2,
    title2
  } = styles;

  return (
    <div style={main} className="main">
      <div style={adviserCardDiv} className="adviserCardDiv">
        <div style={titleBlock} className="title-block">
          <p style={title}>Advisor Contact Information</p>
        </div>
        <div style={bigBlock} className="title">
          {
            <h3 style={header}>
              <span>
                {props.adviser.name}
                <br />
                Room: {props.adviser.room}
                <br />
                Hours: {props.adviser.hours}
                <br />
                Contact: {props.adviser.contact}
              </span>
            </h3>
          }
        </div>
      </div>
      <div style={{ marginRight: width / 30 }} className="departmentDiv">
        <div style={titleBlock2} className="title-block">
          <p style={title2}>Department</p>
        </div>
        <div style={biggerBlock} className="biggerBlock">
          {
            <h3 style={headerBig}>
              <span>
                <br />
                <br />
                Mathematic Dept. <br />
                Room: W1100
                <br />
                Office Hour: <br />
                Mon-Fri 8:00AM-5:00PM
                <br />
                <br />
                <br />
                English Dept. <br />
                Room: W1111 <br />
                Office Hour: <br />
                Mon-Fri: 8:00AM-5:00PM <br />
                <br />
                <br />
                Comp. Sci. Dept. <br />
                Room: W1122
                <br />
                Office Hour: <br />
                Mon-Fri 8:00AM-5:00PM
                <br />
                <br />
                <br />
                History Dept. <br />
                Room: W1133
                <br />
                Office Hour: <br />
                Mon-Fri 8:00AM-5:00PM
                <br />
                <br />
                <br />
                Science Dept. <br />
                Room: W1144
                <br />
                Office Hour: <br />
                Mon-Fri 8:00AM-5:00PM
                <br />
              </span>
            </h3>
          }
        </div>
      </div>
    </div>
  );
};

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  main: {
    marginLeft: width / 25
  },
  adviserCardDiv: { marginTop: height / 25, marginLeft: width / 1000 },
  titleBlock: {
    width: height / 0.75,
    height: height / 20,
    backgroundColor: "#A42323"
  },
  title: {
    color: "#F2F2F2",
    marginLeft: width / 40,
    fontSize: height / 35
  },
  bigBlock: {
    float: "left",
    width: height / 0.75,
    height: height / 1.32,
    backgroundColor: "#F7E8E8",
    borderRadius: width / 130
  },
  header: {
    textAlign: "center",
    fontSize: height / 13,
    color: "#black",
    padding: height / 5.17,
    border: "2px solid red"
  },
  headerBig: {
    textAlign: "center",
    fontSize: height / 47,
    color: "#black",
    marginTop: -(height / 50)
  },
  biggerBlock: {
    //padding: "50 px",
    float: "right",
    width: width / 5,
    height: height / 1.315,
    backgroundColor: "#F7E8E8",
    marginTop: 0,
    border: "2px solid red"
  },
  titleBlock2: {
    float: "right",
    width: width / 5,
    height: height / 20,
    backgroundColor: "#A42323",
    marginTop: -(width / 43)
  },
  title2: {
    float: "left",
    color: "#F2F2F2",
    marginLeft: width / 15,
    fontSize: height / 35
  }
};

export default AdviserCard;
