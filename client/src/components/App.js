import "../../src/App.css";
import React, { useState } from "react";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import TableData from "./TableData";
import "bulma/css/bulma.css";
import Guide from "./GuideText";
import Start from "./StartText";

function App() {
  const [category, setCategory] = useState("");
  const [districtChosen, setDistrictChosen] = useState(false);
  const [districtName, setDistrictName] = useState("");
  // function to get and set the category of business/service
  const getCategory = (value) => {
    setCategory(value);
  };
  // function to get the district name, reset the category value and confirm that a district has been chosen
  const distValue = (e) => {
    setCategory("");
    setDistrictChosen(true);
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
            <div class="select is-active is-primary">
              <select id="districts" onChange={distValue}>
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
      <h1>JOHN</h1>
      <hr class="mx-auto" />
      {districtName === "" || districtName === "null" ? (
        <Start />
      ) : category === "" ? (
        <Guide />
      ) : null}
      {districtChosen && districtName !== "null" ? (
        <TableData distName={districtName} category={category} />
      ) : null}
    </div>
  );
}

export default App;
