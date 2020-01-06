import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
            <div className="App_Aside"></div>
            <div className="App_Form">
              <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">Sign In</NavLink>
                  <NavLink to="/sign-up"  activeClassName="PageSwitcher_Item_Active" className="PageSwitcher_Item">Sign Up</NavLink>
                </div>
  
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">User Sign In</NavLink>
                     or <NavLink to="/sign-up" activeClassName="FormTitle_Link_Active" className="FormTitle_Link">User Sign Up</NavLink>
                </div>  
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField_Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField_Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField_Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField_Button mr-20">Sign In</button> <Link to="/sign-up" className="FormField_Link">Create an account</Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}
export default SignInForm;