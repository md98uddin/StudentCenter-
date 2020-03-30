import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import axios from "axios";
import BalanceLoanPayCard from "../reusables/BalanceLoanPayCard";

class AidsAndLoans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      loanAmt: null,
      loanYear: null,
      paymentError: null,
      successMsg: null,
      yearError: null,
      cardName: null,
      cardNumber: null,
      expiration: null,
      ccv: null,
      payAmt: null,
      payAmtError: null,
      fieldError: null,
      successMsgPay: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.user !== nextProps.user) {
      return {
        user: nextProps.user
      };
    }
    return null;
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitLoan = async e => {
    const { user, loanAmt, loanYear } = this.state;
    const transaction = {
      transactionId:
        new Date().getMonth() +
        new Date().getDay() +
        new Date().getFullYear() +
        user.email +
        (Math.random() * (150 - 100) + 100),
      type: "loan",
      amount: "$" + loanAmt + ".00",
      date:
        new Date().getMonth() + new Date().getDay() + new Date().getFullYear()
    };
    e.preventDefault();
    if (user && loanYear >= new Date().getFullYear()) {
      if (user.tuition < loanAmt) {
        var paymentErrorMessage = "Loan  is greater than balance ";
        this.setState({
          paymentError: paymentErrorMessage,
          successMsg: null,
          yearError: null
        });
      } else if (user.tuition >= loanAmt) {
        await axios.post(
          `http://localhost:3000/students/finance/pay/${user.email}?amount=${loanAmt}&credits=0`
        );
        await axios.put(
          `http://localhost:3000/students/finance/transactions/${user.email}`,
          transaction
        );
        var successMessage = "Loan Approved!";
        var updateUser = user;
        updateUser.tuition -= loanAmt;
        this.setState({
          successMsg: successMessage,
          paymentError: null,
          user: updateUser,
          yearError: null
        });
      }
    } else if (
      (user && loanYear < new Date().getFullYear()) ||
      loanYear <= new Date().getFullYear()
    ) {
      var yearErrorMessage = "year minimum is current year";
      this.setState({
        successMsg: null,
        paymentError: null,
        yearError: yearErrorMessage
      });
    } else {
      console.log("no user detected");
    }
  };

  onSubmitPay = async e => {
    const { user, payAmt, cardName, cardNumber, ccv, expiration } = this.state;
    const transaction = {
      transactionId:
        new Date().getMonth() +
        new Date().getDay() +
        new Date().getFullYear() +
        user.email +
        (Math.random() * (150 - 100) + 100),
      type: "pay",
      amount: "$" + payAmt + ".00",
      date:
        new Date().getMonth() + new Date().getDay() + new Date().getFullYear()
    };
    console.log("on submit", this.state);
    if (user) {
      if (user.tuition < payAmt) {
        var payAmtErrorMessage = "amount is greater than balance";
        this.setState({
          payAmtError: payAmtErrorMessage,
          successMsgPay: null,
          fieldError: null
        });
      } else if (
        user.tuition >= payAmt &&
        cardName &&
        cardNumber &&
        ccv &&
        expiration &&
        payAmt > 0
      ) {
        await axios.post(
          `http://localhost:3000/students/finance/pay/${user.email}?amount=${payAmt}&credits=0`
        );
        await axios.put(
          `http://localhost:3000/students/finance/transactions/${user.email}`,
          transaction
        );
        var successMessage = "Payment Sent!";
        var updateUser = user;
        updateUser.tuition -= payAmt;
        this.setState({
          successMsgPay: successMessage,
          payAmtError: null,
          fieldError: null,
          user: updateUser
        });
      } else if (!cardName || cardNumber || ccv || expiration || payAmt) {
        var fieldErrorMessage = "some inputs are invalid";
        this.setState({
          successMsgPay: null,
          payAmtError: null,
          fieldError: fieldErrorMessage
        });
      }
    }
  };

  render() {
    const {
      user,
      paymentError,
      successMsg,
      yearError,
      fieldError,
      successMsgPay,
      payAmtError
    } = this.state;
    return user ? (
      <div
        style={{
          backgroundColor: "#A4A4A4"
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
        />
        <BalanceLoanPayCard
          tuition={user.tuition}
          onInputChange={this.onInputChange}
          onSubmitLoan={this.onSubmitLoan}
          onSubmitPay={this.onSubmitPay}
          successMsg={successMsg}
          successMsgPay={successMsgPay}
          payAmtError={payAmtError}
          paymentError={paymentError}
          yearError={yearError}
          fieldError={fieldError}
          futureDue={user.tuition - user.tuition / 1.5}
          dueNow={user.tuition / 1.5}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AidsAndLoans;
