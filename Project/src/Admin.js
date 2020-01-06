import React, { Component } from 'react';

class Admin extends Component {
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
  
                <div className="FormTitle">
                    <div className="sign">Admin Login</div>
                     
                </div>  
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
            <label className="FormField_Label" htmlFor="username">User Name</label>
                <input type="text" id="username" className="FormField_Input" placeholder="Enter your User Name" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField_Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField_Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField_Button mr-20">Sign In</button>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}
export default Admin;