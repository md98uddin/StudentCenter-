import React from "react";

const HoldsResources = props => {
  const {
    main,
    holdTitleBlock,
    holdTitle,
    holdRedBlock,
    adviserTitleBlock,
    adviserTitle,
    adviserRedBlock,
    resourcesTitleBlock,
    resourcesTitle,
    resourcesRedBlock,
    textStyle,
    textSize
  } = styles;

  var holdsInfo = props.holds.slice(0);
  return (
    <div style={main} className="main">
      <div style={holdTitleBlock} className="hold-title-block">
        <p style={holdTitle}>HOLDS</p>

          <span>
            {holdsInfo.map((holds, i) => (
              <div key={i} style={textStyle} className="holdBlock">
                <p style={textSize}>{holds.holdCode}</p>
                Note: {holds.descriptions}
                <br />
                Campus: {holds.campus}
              </div>
            ))}
          </span>

      </div>

      <div style={holdRedBlock} className="hold-red-block"></div>
      <div style={adviserTitleBlock} className="adviser-title-block">
        <p style={adviserTitle}>MY ADVISER</p>
            <p style={textSize}>{props.adviser.name}</p>
            <p style={textStyle}>
            Room: {props.adviser.room}
            <br />
            Hours: {props.adviser.hours}
            <br />
            Contact: {props.adviser.contact}
        </p>
      </div>

      <div style={adviserRedBlock} className="adviser-red-block"></div>
      <div style={resourcesTitleBlock} className="resources-title-block">
        <p style={resourcesTitle}>RESOURCES</p>
        <p style={textStyle}>
          Blackboard
          <br />
          FASFA
          <br />
          TAP
          <br />
          DegreeWorks

        </p>
      </div>

      <div style={resourcesRedBlock} className="hold-big-block"></div>
    </div>
  );
};

const { innerWidth: width, innerHeight: height } = window;

const styles = {
  main: {
    marginTop: width / 50,
    marginLeft: width / 20,
    display: "inline-block"
  },
  holdTitleBlock: {
    width: width / 5.7,
    height: height / 22,
    backgroundColor: "#F2F2F2",
    marginBottom: height / 100
  },
  holdTitle: {
    color: "#A42323",
    marginLeft: width / 15,
    fontSize: height / 30
  },
  holdRedBlock: {
    width: width / 5.7,
    height: height / 4.69,
    backgroundColor: "#A42323"
  },
  adviserTitleBlock: {
    width: width / 5.7,
    height: height / 22,
    backgroundColor: "#F2F2F2",
    marginBottom: height / 100,
    marginTop: height / 100
  },
  adviserTitle: {
    color: "#A42323",
    marginLeft: width / 22,
    fontSize: height / 30
  },
  adviserRedBlock: {
    width: width / 5.7,
    height: height / 4.69,
    backgroundColor: "#A42323"
  },
  textStyle: {
    color: "#f5d0d0",
    textAlign: "center"
  },
  textSize: {
    fontSize: height / 30,
    color: "#ffffff",
    textAlign: "center"
  },
  resourcesTitleBlock: {
    width: width / 5.7,
    height: height / 22,
    backgroundColor: "#F2F2F2",
    marginBottom: height / 100,
    marginTop: height / 100
  },
  resourcesTitle: {
    color: "#A42323",
    marginLeft: width / 21,
    fontSize: height / 30
  },
  resourcesRedBlock: {
    width: width / 5.7,
    height: height / 4.69,
    backgroundColor: "#A42323"
  }
};

export default HoldsResources;
