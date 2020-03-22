import React from "react";

const LoanCard = props => {
  const { main, titleDiv, title } = styles;
  return (
    <div style={main} className="main">
      <div style={titleDiv} className="titleDiv">
        <p style={title}>Loan Request</p>
      </div>
      <div className="loanMain">
        <div className="loanAmtInput">
          <p>* You owe $.</p>
          <p>* Due Now:$0.00</p>
          <p>* Future Due: $</p>
        </div>
      </div>
    </div>
  );
};

const { innerHeight: height, innerWidth: width } = window;
const styles = {
  main: { float: "left", marginBottom: height / 2 },
  title: {
    fontSize: width / 75,
    color: "#FFFFFF",
    marginLeft: width / 90,
    marginBottom: 0
  },
  titleDiv: {
    marginLeft: width / 15,
    marginTop: height / 25,
    backgroundColor: "#A42323",
    width: height / 2.2,
    height: height / 17,
    textAlign: "center"
  }
};

export default LoanCard;
