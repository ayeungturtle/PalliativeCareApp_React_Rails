import React, { Component } from 'react';
import './App.css';
import AdultForm from './AdultForm';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <AdultForm/>
      </div>
    );
  }
}

export default App;
