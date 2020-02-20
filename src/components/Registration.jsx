import React, { Component } from 'react';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            dob: '',
            phone_number: '',
            address: '',
            city: '',
            country: '',
            zipcode: ''
        };

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

      const student = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          dob: this.state.dob,
          phone_number: this.state.phone_number,
          address: this.state.address,
          country: this.state.country,
          city: this.state.city,
          zipcode: this.state.zipcode
          
        }
    
      console.log(student);

      window.location = '/login';
    }


  render() {
    return (
        <div>
        <h3>Registration</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                autoFocus
                name="first_name"
                className="form-control"
                placeholder="First name"
                value={this.state.first_name}
                onChange={this.onInputChange}
                />
          </div>

          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                name="last_name"
                className="form-control"
                placeholder="Last name"
                value={this.state.last_name}
                onChange={this.onInputChange}
                />
          </div>

          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                name="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onInputChange}
                />
          </div>
          
          <div className="form-group"> 
            <label>Date of Birth: </label>
            <input  type="text"
                required
                name="dob"
                className="form-control"
                placeholder="Date of Birth"
                value={this.state.dob}
                onChange={this.onInputChange}
                />
          </div>
          
          <div className="form-group"> 
            <label>Phone Number: </label>
            <input  type="text"
                required
                name="phone_number"
                className="form-control"
                placeholder="Phone #"
                value={this.state.phone_number}
                onChange={this.onInputChange}
                />
          </div>

          <div className="form-group"> 
            <label>Address: </label>
            <input  type="text"
                required
                name="address"
                className="form-control"
                placeholder="Address"
                value={this.state.address}
                onChange={this.onInputChange}
                />
          </div>

          
          <div className="form-group"> 
            <label>City: </label>
            <input  type="text"
                required
                name="city"
                className="form-control"
                placeholder="City"
                value={this.state.city}
                onChange={this.onInputChange}
                />
          </div>

          
          <div className="form-group"> 
            <label>Country: </label>
            <input  type="text"
                required
                name="country"
                className="form-control"
                placeholder="Country"
                value={this.state.country}
                onChange={this.onInputChange}
                />
          </div>

          <div className="form-group"> 
            <label>Zip Code: </label>
            <input  type="text"
                required
                name="zipcode"
                className="form-control"
                placeholder="Zip Code"
                value={this.state.zipcode}
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