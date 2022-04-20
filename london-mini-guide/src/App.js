import "./App.css";
import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Table from "./Table";
import 'bulma/css/bulma.css'

function App() {
  const [category, setCategory] = useState("");
  const [cityName, setCityName] = useState("");

  const getCategory = (value) => {
    setCategory(value);
  };

  const cityValue = (e) => {
    return e.target.value!=="city" ? setCityName(e.target.value) : "not a city";
  };

  return (
    <div className="App">
      <h1 class="is-size-1 has-text-centered">London Mini Guide</h1>
      <hr />
      <div class="column is-half is-offset-one-quarter">
        <div class="field has-add-ons">
          <p class="control has-icons-left">
            <span class="select is-primary is-rounded is-normal">
              <select
                name="cities"
                id="cities"
                onChange={cityValue}
                value={"city"}
              >
                <option selected value="city">
                  City
                </option>
                <option value="harrow">Harrow</option>
                <option value="heathrow">Heathrow</option>
                <option value="stratford">Stratford</option>
              </select>
            </span>
            <span class="icon is-left">
              <i class="fas fa-city"></i>
            </span>
          </p>
          <div class="control">
            <button type="submit" class="button is-primary">
              Choose
            </button>
          </div>
        </div>
      </div>
      <hr />
      <ButtonContainer getCategory={getCategory} />
      <hr />
      <Table cityName={cityName} />
    </div>
  );
}

export default App;
