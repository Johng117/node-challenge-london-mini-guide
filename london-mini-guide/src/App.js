import "./App.css";
import React, { useState } from "react";
// import data from "./Harrow";
// import data2 from "./Heathrow";
// import data3 from "./Stratford";
import ButtonContainer from "./ButtonContainer"
import Table from "./Table"
function App() {

  const [category, setCategory] = useState("")
  
  const getCategory=(value)=> {
    setCategory(value);
  }
  console.log(category);

  const getCity =(e)=> {
    return e.target.value;
  }

  return (
    <div className="App">
      <h1>City Mini Guide</h1>
      <hr />
      <div className="select-box">
        <label for="cities">choose a city: </label>
        <select name="cities" id="cities" onChange={getCity}>
          <option value="harrow">Harrow</option>
          <option value="heathrow">Heathrow</option>
          <option value="stratford">Stratford</option>
        </select>
      </div>
      <hr />
      <ButtonContainer  getCategory={getCategory}/>
      <hr />
      <Table getCity={getCity}/>
    </div>
  );
}

export default App;
