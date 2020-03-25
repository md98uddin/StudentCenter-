import React from "react";
import PayForm from "./PayForm";
import { formatCount } from "../utils/services";

const BalanceLoanPayCard = props => {
  const {
    tuition,
    onInputChange,
    onSubmitLoan,
    onSubmitPay,
    successMsg,
    successMsgPay,
    fieldError,
    payAmtError,
    paymentError,
    yearError,
    futureDue,
    dueNow
  } = props;
  const {
    main,
    titleDiv,
    title,
    balanceAmt,
    balanceTitle,
    DueFuture,
    inputYear,
    inputAmt,
    loanBtn,
    msgDivPE,
    msgDivSM
  } = styles;

  return (
    <div style={main} className="main">
      <div style={titleDiv} className="titleDiv">
        <p style={title}>Account Summary</p>
      </div>
      <div className="balanceMain">
        <div style={balanceAmt} className="balanceAmtDiv">
          <p style={balanceTitle}>* You owe ${formatCount(tuition)}</p>
          <p style={DueFuture}>* Due Now:${formatCount(dueNow)}</p>
          <p style={DueFuture}>* Future Due: ${formatCount(futureDue)}</p>
        </div>
      </div>
      {paymentError ? (
        <div style={msgDivPE} className="msgDiv">
          <p>{paymentError}</p>
        </div>
      ) : null}
      {successMsg ? (
        <div style={msgDivSM} className="msgDiv">
          <p>{successMsg}</p>
        </div>
      ) : null}
      {yearError ? (
        <div style={msgDivPE} className="msgDiv">
          <p>{yearError}</p>
        </div>
      ) : null}
      <div style={titleDiv} className="titleDiv">
        <p style={title}>Loan Request</p>
      </div>
      <div className="balanceMain">
        <div style={balanceAmt} className="balanceAmtDiv">
          <input
            onChange={onInputChange}
            style={inputYear}
            type="text"
            maxLength="4"
            name="loanYear"
            placeholder="enter year..."
          />
          <input
            onChange={onInputChange}
            style={inputAmt}
            type="number"
            maxLength="5"
            name="loanAmt"
            placeholder="enter amount..."
          />
          <br />
          <button
            onClick={onSubmitLoan}
            style={loanBtn}
            className="btn btn-info"
          >
            Request Loan
          </button>
        </div>
      </div>
      <PayForm
        onInputChange={onInputChange}
        onSubmitPay={onSubmitPay}
        fieldError={fieldError}
        successMsgPay={successMsgPay}
        payAmtError={payAmtError}
      />
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
    marginTop: height / 50,
    backgroundColor: "#A42323",
    width: height / 2.2,
    height: height / 17,
    textAlign: "center",
    border: "solid",
    borderColor: "#91434b"
  },
  balanceAmt: {
    marginTop: 0,
    marginLeft: width / 15,
    width: height / 2.2,
    height: height / 3,
    backgroundColor: "#FFEFEF",
    border: "solid",
    borderColor: "#91434b"
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
  loanBtn: { marginLeft: width / 14.7, marginTop: height / 30 },
  msgTitleError: {
    marginLeft: width / 30
  },
  msgDivPE: {
    marginLeft: width / 11,
    marginTop: height / 100,
    backgroundColor: "#f59542",
    width: height / 2.75,
    height: height / 17,
    fontSize: width / 80,
    textAlign: "center",
    paddingTop: 5,
    border: "solid",
    borderColor: "#fc0335",
    borderRadius: 20
  },
  msgDivSM: {
    marginLeft: width / 11,
    marginTop: height / 100,
    backgroundColor: "#45962a",
    width: height / 2.75,
    height: height / 17,
    fontSize: width / 80,
    textAlign: "center",
    paddingTop: 5,
    border: "solid",
    borderColor: "#80d164",
    borderRadius: 20
  }
};

export default BalanceLoanPayCard;
