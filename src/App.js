import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel Destinations</h1>
        </header>
        <Travel
          destination="Great Wall of China"
          country="China"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
          distance="75 km from Beijing"
        />
        <Travel
          destination="Egyptian pyramids of Keops"
          country="Egypt"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1280px-All_Gizah_Pyramids.jpg"
          distance="47 km from Le Caire"
        />
      </div>
    );
  }
}

export default App;
