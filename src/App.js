import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../src/pages/NavigationBar";
import LandingPage from "../src/pages/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
