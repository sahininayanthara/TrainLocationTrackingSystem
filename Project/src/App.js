import React, { Component } from 'react';
import './App.css';
import Admin from './Admin';
import Button from './Button';
import pic from "./pic.jpg";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

class App extends Component {
  render() {
  return (
    
    <Router>
<Route path="/" exact component={Home}></Route>
<Route path="/sign-up" component={SignUpForm}></Route>
<Route path="/sign-in" component={SignInForm}></Route>
<Route path="/admin" component={Admin}></Route>
   </Router>
    
  );
}
}
const Home = () =>(
  <div>
    <img src={pic} alt="mypic" />
    <Button/>
  </div>
);

export default App;
