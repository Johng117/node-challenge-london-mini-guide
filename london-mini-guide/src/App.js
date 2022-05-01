import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import TableData from "./TableData"
import 'bulma/css/bulma.css';

function App() {
  const [category, setCategory] = useState("pharmacies");
  const [districtName, setDistrictName] = useState("harrow");

  const getCategory = (value) => {
    setCategory(value);
  };

  const distValue = (e) => {
    setCategory("")
    setDistrictName(e.target.value);
  };
  return (
    <div>
      <div class="section pt-4 pb-0 has-text-centered">
        <Header />
        <hr class="mx-auto"></hr>
      </div>

      <div class="section py-0 has-text-centered">
        <div class="field has-add-ons">
          <div class="control has-icons-left">
            <div class="select is-primary">
              <select
                name="districts"
                id="districts"
                onChange={distValue}
                value={"city"}
              >
                <option value="null">Choose District</option>
                <option value="harrow">Harrow</option>
                <option value="heathrow">Heathrow</option>
                <option value="stratford">Stratford</option>
              </select>
              <div class="icon is-left has-text-black">
                <i class="fa fa-city pl-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mx-auto" />
      <ButtonContainer getCategory={getCategory} />
      <hr class="mx-auto" />
      <TableData distName={districtName} category={category} />
    </div>
  );
}

export default App;
