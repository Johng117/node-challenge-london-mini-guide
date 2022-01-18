import "./App.css";
import React from "react";
// import data from "./Harrow";
// import data2 from "./Heathrow";
// import data3 from "./Stratford";
import Buttons from "./Buttons"
import Table from "./Table"
function App() {

  const buttonHandler=(e)=> {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h1>City Mini Guide</h1>
      <hr />
      <div className="select-box">
        <label for="cities">choose a city: </label>
        <select name="cities" id="cities">
          <option value="harrow">Harrow</option>
          <option value="heathrow">Heathrow</option>
          <option value="stratford">Stratford</option>
        </select>
      </div>
      <hr />
      <Buttons buttonHandler={buttonHandler} />
      <hr />
      <Table/>
    </div>
  );
}

export default App;
