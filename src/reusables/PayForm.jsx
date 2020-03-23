import React from "react";

const PayForm = props => {
  const {
    main,
    titleDiv,
    title,
    mainBlock,
    inputs,
    btnStyle,
    fieldErrorStyle,
    payAmtErrorStyle,
    successMsgPayStyle
  } = styles;
  const {
    onInputChange,
    onSubmitPay,
    successMsgPay,
    fieldError,
    payAmtError
  } = props;
  return (
    <div style={main} className="main">
      <div style={titleDiv} className="titleDiv">
        <p style={title}>Payment Information</p>
      </div>
      <div style={mainBlock} className="balanceMain">
        <div className="balanceAmtDiv">
          <label
            style={{
              marginLeft: window.innerWidth / 8.3,
              marginTop: height / 30
            }}
          >
            Name on Card
          </label>
          <br />
          <input
            style={inputs}
            onChange={onInputChange}
            type="text"
            name="cardName"
            placeholder="name on card..."
            maxLength="64"
          />
          <br />
          <label
            style={{
              marginLeft: window.innerWidth / 8.3,
              marginTop: height / 37
            }}
          >
            Card Number
          </label>
          <br />
          <input
            style={inputs}
            onChange={onInputChange}
            type="text"
            name="cardNumber"
            placeholder="card 16 digit number..."
            maxLength="16"
          />
          <br />
          <label
            style={{
              marginLeft: window.innerWidth / 7.7,
              marginTop: height / 37
            }}
          >
            Expiration
          </label>
          <br />
          <input
            style={inputs}
            onChange={onInputChange}
            type="text"
            name="expiration"
            placeholder="mm/yy..."
            maxLength="5"
          />
          <br />
          <label
            style={{
              marginLeft: window.innerWidth / 7,
              marginTop: height / 37
            }}
          >
            CCV
          </label>
          <br />
          <input
            style={inputs}
            onChange={onInputChange}
            type="text"
            name="ccv"
            placeholder="3/4 digit code on back..."
            maxLength="4"
          />
          <br />
          <label
            style={{
              marginLeft: window.innerWidth / 7.5,
              marginTop: height / 37
            }}
          >
            Amount
          </label>
          <br />
          <input
            style={inputs}
            onChange={onInputChange}
            type="number"
            name="payAmt"
            placeholder="payment amount..."
          />
          <br />
          <button
            onClick={onSubmitPay}
            style={btnStyle}
            className="btn-sm btn-success"
          >
            Pay
          </button>
        </div>
      </div>
      {successMsgPay ? (
        <div style={successMsgPayStyle}>{successMsgPay}</div>
      ) : null}
      {fieldError ? <div style={fieldErrorStyle}>{fieldError}</div> : null}
      {payAmtError ? <div style={payAmtErrorStyle}>{payAmtError}</div> : null}
    </div>
  );
};

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  main: {
    float: "right"
  },
  titleDiv: {
    marginRight: width / 10,
    marginTop: -(height / 1.243),
    backgroundColor: "#A42323",
    width: height / 1.5,
    height: height / 17,
    textAlign: "center",
    border: "solid",
    borderColor: "#91434b"
  },
  title: { fontSize: width / 70, color: "#FFFFFF" },
  mainBlock: {
    height: height / 1.33,
    width: height / 1.5,
    backgroundColor: "#FFEFEF",
    border: "solid",
    borderColor: "#91434b"
  },
  inputs: {
    marginLeft: width / 13.4,
    width: width / 6,
    border: "solid",
    borderColor: "#fc0335"
  },
  btnStyle: {
    marginLeft: width / 8.3,
    marginTop: height / 30,
    width: height / 6,
    height: height / 15,
    backgroundColor: "#136912"
  },
  fieldErrorStyle: {
    width: width / 7.5,
    height: height / 19,
    marginTop: height / 65,
    marginLeft: width / 10,
    backgroundColor: "#ccb531",
    color: "#000000",
    borderRadius: 10,
    border: "solid",
    alignText: "center"
  },
  payAmtErrorStyle: {
    width: width / 6,
    height: height / 19,
    marginTop: height / 65,
    marginLeft: width / 11.5,
    backgroundColor: "#133ad4",
    color: "#ffffff",
    borderRadius: 10,
    border: "solid",
    alignText: "center"
  },
  successMsgPayStyle: {
    width: width / 12,
    height: height / 19,
    marginTop: height / 65,
    marginLeft: width / 8,
    backgroundColor: "#133ad4",
    color: "#ffffff",
    borderRadius: 10,
    border: "solid",
    alignText: "center"
  }
};

export default PayForm;
