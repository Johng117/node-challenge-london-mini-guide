import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import Table from "./Table";
import 'bulma/css/bulma.css';

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
    <div>

    <div class="section has-centered">
      <Header />
      <hr class="mx-auto"></hr>
    </div>

      <div class="section">
        <div class="field has-add-ons">
          <div class="control has-icons-left">
            
            <div class="select is-primary is-normal">
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
            </div>

            <span class="icon is-left">
              <i class="fas fa-city"></i>
            </span>

          </div>
          
          <div class="control">
            <button type="submit" class="button is-primary">
              Select
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
