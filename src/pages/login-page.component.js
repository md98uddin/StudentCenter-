import React, { Component } from 'react';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
    
        this.onEmail = this.onEmail.bind(this);
        this.onPassword = this.onPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

    onPassword(e) {
        this.setState({
          password: e.target.value
        })
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


  render() {
    return (
        <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onPassword}
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