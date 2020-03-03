import React from "react";

const AdviserCard = props => {
  const { main, titleBlock, title, bigBlock, biggerBlock, titleBlock2, title2} = styles;
  return (
    <div style={main} className="main">
        <div style={titleBlock} className="title-block">
        <p style={title}>Advisor Contact Information</p>
        </div>
        <div style = {bigBlock} className= "title">{
          <h3 style={{
            textAlign: 'center',
            fontSize: 50,
            color: "#black"
          }}>
          <span>{props.adviser.name}<br/>
          Room: {props.adviser.room}<br/>
          Hours: {props.adviser.hours}<br/>
          Room: {props.adviser.contact}</span>
          </h3>}
        </div>

          <div style={titleBlock2} className="title-block">
          <p style={title2}>Department</p>
          </div>
          <div style = {biggerBlock} className= "biggerBlock">{
            <h3 style={{
              textAlign: 'center',
              fontSize: 15,
              color: "#black"
            }}>
            <span>
              <br/>
              <br/>
              Mathematic Dept. <br/>
              Room: W1100<br/>
              Office Hour: <br/>
              Mon-Fri 8:00AM-5:00PM<br/>
              <br/>
              <br/>
              English Dept. <br/>
              Room: W1111 <br/>
              Office Hour: <br/>
              Mon-Fri: 8:00AM-5:00PM <br/>
              <br/>
              <br/>
              Comp. Sci. Dept. <br/>
              Room: W1122<br/>
              Office Hour: <br/>
              Mon-Fri 8:00AM-5:00PM<br/>
              <br/>
              <br/>
              History Dept. <br/>
              Room: W1133<br/>
              Office Hour: <br/>
              Mon-Fri 8:00AM-5:00PM<br/>
              <br/>
              <br/>
              Science Dept. <br/>
              Room: W1144<br/>
              Office Hour: <br/>
              Mon-Fri 8:00AM-5:00PM<br/>
            </span>
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
    float: "left",
    width: "130vh",
    height: "30px",
    backgroundColor: "#A42323",
    marginBottom: "0px"
  },
  title: {
    float: "left",
    color: "#F2F2F2", 
    marginLeft: "37px", 
    fontSize: 20 
  },
  bigBlock: {
    width: "130vh",
    height: "500px",
    float: "left",
    backgroundColor: "#F7E8E8",
    marginTop: "0px",
    borderRadius: "10px"
  },
  biggerBlock: {
    //padding: "50 px",
    float: "left",
    width: "30vh",
    height: "600px",
    backgroundColor: "#F7E8E8",
    marginLeft: "50px",
    //marginTop: "0px",
    borderRadius: "10px"
  },
  titleBlock2: {
    float: "left",
    width: "30vh",
    height: "30px",
    backgroundColor: "#A42323",
    marginLeft: "50px",
    marginTop: "-30px"
    
  },
  title2: {
    float: "left",
    color: "#F2F2F2", 
    marginLeft: "50px", 
    fontSize: 20 
  }
};

export default AdviserCard;
