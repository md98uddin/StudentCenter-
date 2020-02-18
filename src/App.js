import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route } from "react-router-dom";
 
import Navbar from "./pages/navbar.component";
import HomePage from "./pages/home-page.component";
import LoginPage from "./pages/login-page.component";
import RegisterPage from "./pages/register-page.component";

function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>
        <Route path = "/" exact component = {HomePage} />
        <Route path = "/login" exact component = {LoginPage} />
        <Route path = "/register" exact component = {RegisterPage} />
      </div>
    </Router>
  );
}

export default App;
