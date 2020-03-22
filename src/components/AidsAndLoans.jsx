import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./NavBar";
import BalanceCard from "../reusables/BalanceLoanCard";
import axios from "axios";

class AidsAndLoans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      loanAmt: null,
      loanYear: null,
      payAmt: null,
      paymentError: null,
      successMsg: null
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

  onSubmit = async e => {
    const { user, paymentError, successMsg, loanAmt } = this.state;
    e.preventDefault();
    if (user.tuition < loanAmt) {
      var paymentErrorMessage = "your balance is below requested loan.";
      this.setState({ paymentError: paymentErrorMessage });
    } else if (user.tuition >= loanAmt) {
      await axios.post(
        `http://localhost:3000/students/finance/pay/${user.email}?amount=${loanAmt}&credits=0`
      );
      var successMessage = "payment made!";
      this.setState({ successMsg: successMessage });
    }
  };

  render() {
    const { user, paymentError, successMsg } = this.state;

    return user ? (
      <div
        style={{
          height: "110vh",
          width: "100%",
          backgroundColor: "#A4A4A4"
          //backgroundImage: "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/105601-red-star-pattern.jpg?w=800&q=95')"
        }}
      >
        <Navbar
          signOutStudent={this.props.signOutStudent}
          campus={user.campusId}
        />
        <BalanceCard
          tuition={user.tuition}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          successMsg={successMsg}
          paymentError={paymentError}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AidsAndLoans;
