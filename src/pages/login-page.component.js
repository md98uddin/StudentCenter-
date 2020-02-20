import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
  
  this.onInputChange = this.onInputChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
      e.preventDefault(); 

      const LoginInfo = {
          email: this.state.email,
          password: this.state.password
        }
    
      console.log(LoginInfo);

      window.location = '/';
      }

//textbox for user/password input
  render() {
    return (
        <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
            <label>Email: </label>
            <input  type="email"
                required
                autoFocus
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.onInputChange}
                />
          </div>

          <div className="form-group"> 
            <label>Password: </label>
            <input  type="password"
                required
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.onInputChange}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Confirm" className="btn btn-primary" />
          </div>
          
        </form>
        </div>
    )
  }
}