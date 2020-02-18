import React, { Component } from 'react';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    
        this.onFirstName = this.onFirstName.bind(this);
        this.onLastName = this.onLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: ''
        }
    }

    onFirstName(e) {
        this.setState({
          first_name: e.target.value
        })
      }

    onLastName(e) {
        this.setState({
          last_name: e.target.value
        })
      }

    onSubmit(e) {
        e.preventDefault(); 

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name
          }
      
        console.log(user);

        window.location = '/login';
        }


  render() {
    return (
        <div>
        <h3>Register New Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.first_name}
                onChange={this.onFirstName}
                />
          </div>
          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.last_name}
                onChange={this.onLastName}
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