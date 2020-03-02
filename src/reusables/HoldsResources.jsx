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
    resourcesRedBlock
  } = styles;
  return (
    <div style={main} className="main">
      <div style={holdTitleBlock} className="hold-title-block">
        <p style={holdTitle}>HOLDS</p>
      </div>

      <div style={holdRedBlock} className="hold-red-block"></div>
      <div style={adviserTitleBlock} className="adviser-title-block">
        <p style={adviserTitle}>MY ADVISER</p>
      </div>

      <div style={adviserRedBlock} className="adviser-red-block"></div>
      <div style={resourcesTitleBlock} className="resources-title-block">
        <p style={resourcesTitle}>RESOURCES</p>
      </div>

      <div style={resourcesRedBlock} className="hold-big-block"></div>
    </div>
  );
};

const styles = {
  main: {
    marginTop: 25,
    marginLeft: 63,
    display: "inline-block"
  },
  holdTitleBlock: {
    width: "220px",
    height: "30px",
    backgroundColor: "#F2F2F2",
    marginBottom: "0px"
  },
  holdTitle: { color: "#A42323", marginLeft: "80px", fontSize: 20 },
  holdRedBlock: {
    width: "220px",
    height: "147px",
    backgroundColor: "#A42323",
    marginTop: "0px"
  },
  adviserTitleBlock: {
    width: "220px",
    height: "30px",
    backgroundColor: "#F2F2F2",
    marginBottom: "0px"
  },
  adviserTitle: { color: "#A42323", marginLeft: "60px", fontSize: 20 },
  adviserRedBlock: {
    width: "220px",
    height: "147px",
    backgroundColor: "#A42323",
    marginTop: "0px"
  },
  resourcesTitleBlock: {
    width: "220px",
    height: "30px",
    backgroundColor: "#F2F2F2",
    marginBottom: "0px"
  },
  resourcesTitle: { color: "#A42323", marginLeft: "63px", fontSize: 20 },
  resourcesRedBlock: {
    width: "220px",
    height: "147px",
    backgroundColor: "#A42323",
    marginTop: "0px"
  }
};

export default HoldsResources;
