import React from "react";

const AdviserCard = props => {
  const { main, titleBlock, title, bigBlock } = styles;
  return (
    <div style={main} className="main">
        <div style={titleBlock} className="title-block">
        <p style={title}>Advisor Contact Information</p>
        </div>
        <div style = {bigBlock} className= "title">{
          <h3 style={{
            fontSize: 50,
            color: "#black"
          }}>
          <span>{props.adviser.name}<br/>
          Room: {props.adviser.room}<br/>
          Hours: {props.adviser.hours}<br/>
          Room: {props.adviser.contact}</span>
          </h3>}
        </div>
    </div>
  );
};

const styles = {
  main: { 
    marginLeft: "80px",
    float: "left", 
    marginTop: 25 
  },
  titleBlock: {
    width: "130vh",
    height: "30px",
    backgroundColor: "#A42323",
    marginBottom: "0px"
  },
  title: {
    color: "#F2F2F2", 
    marginLeft: "37px", 
    fontSize: 20 
  },
  bigBlock: {
    width: "130vh",
    height: "500px",
    backgroundColor: "#F7E8E8",
    marginTop: "0px"
  }
};

export default AdviserCard;
