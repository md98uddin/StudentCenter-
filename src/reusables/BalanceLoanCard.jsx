import React from "react";

const BalanceCard = props => {
  const { tuition, onInputChange, onSubmit, successMsg, paymentError } = props;
  const {
    main,
    titleDiv,
    title,
    balanceAmt,
    balanceTitle,
    DueFuture,
    inputYear,
    inputAmt,
    loanBtn
  } = styles;
  var formatTuition = tuition
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  console.log("tuition", tuition);
  return (
    <div style={main} className="main">
      <div style={titleDiv} className="titleDiv">
        <p style={title}>Account Summary</p>
      </div>
      <div className="balanceMain">
        <div style={balanceAmt} className="balanceAmtDiv">
          <p style={balanceTitle}>* You owe ${formatTuition}.</p>
          <p style={DueFuture}>* Due Now:$0.00</p>
          <p style={DueFuture}>* Future Due: ${formatTuition}</p>
        </div>
      </div>
      <div style={titleDiv} className="titleDiv">
        <p style={title}>Loan Request</p>
      </div>
      <div className="balanceMain">
        {successMsg ? <p>{successMsg}</p> : <p>{paymentError}</p>}
        <div style={balanceAmt} className="balanceAmtDiv">
          <input
            onChange={onInputChange}
            style={inputYear}
            type="text"
            name="loanYear"
            placeholder="enter year..."
          />
          <input
            onChange={onInputChange}
            style={inputAmt}
            type="number"
            name="loanAmt"
            placeholder="enter amount..."
          />
          <br />
          <button onClick={onSubmit} style={loanBtn} className="btn btn-info">
            Request Loan
          </button>
        </div>
      </div>
    </div>
  );
};

const { innerHeight: height, innerWidth: width } = window;
const styles = {
  main: { height: height, width: width },
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
  },
  balanceAmt: {
    marginTop: 0,
    marginLeft: width / 15,
    width: height / 2.2,
    height: height / 3,
    backgroundColor: "#FFEFEF"
  },
  balanceTitle: {
    fontSize: height / 30,
    fontWeight: "bold",
    marginLeft: width / 30,
    paddingTop: height / 15
  },
  DueFuture: { fontSize: height / 35, marginLeft: width / 29 },
  inputYear: {
    marginLeft: width / 22,
    marginTop: height / 15,
    border: "solid",
    borderColor: "#fc0335"
  },
  inputAmt: {
    marginLeft: width / 22,
    marginTop: height / 30,
    border: "solid",
    borderColor: "#fc0335"
  },
  loanBtn: { marginLeft: width / 14.7, marginTop: height / 30 }
};

export default BalanceCard;
