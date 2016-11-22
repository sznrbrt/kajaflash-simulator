import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BodyContainer from './containers/BodyContainer/BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
