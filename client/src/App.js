import React from "react";
import "./App.css";
import Calendar from "./Calendar"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Calendar/>
        <h2>MoodScape</h2>
      </div>
     
    </div>
  );
}


export default App;
