import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Calendar"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Calendar/>
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
