import React, { Component } from 'react';
import TopNav from './components/TopNav.js';
import FixedNav from './components/FixedNav.js';
import FirstSection from './components/FirstSection.js';
import SecondSection from './components/SecondSection.js';
import ThirdSection from './components/ThirdSection.js';
import SectionFour from './components/SectionFour.js';
import SectionFive from './components/SectionFive.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <FixedNav />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>

    );
  }
}

export default App;
