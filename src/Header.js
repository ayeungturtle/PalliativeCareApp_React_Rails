import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import './App.css';
import logo from './logo.png';


class Header extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p className="App-intro">
          </p>
        </div>
      );
    }
  }
  
  export default Header;