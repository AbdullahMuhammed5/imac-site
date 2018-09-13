import React, { Component } from 'react';
import TopNav from './components/TopNav.js';
import FixedNav from './components/FixedNav.js';
import FirstSection from './components/FirstSection.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <FixedNav />
        <FirstSection />
      </div>

    );
  }
}

export default App;
