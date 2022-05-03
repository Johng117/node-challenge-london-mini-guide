import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import TableData from "./TableData";
import "bulma/css/bulma.css";
import Guide from "./GuideText";

function App() {
  const [category, setCategory] = useState("");
  const [districtChosen, setDistrictChosen] = useState(false)
  const [districtName, setDistrictName] = useState("");
  const [choiceText, setChoiceText] = useState(false);

  const getCategory = (value) => {
    setCategory(value);
  };

  const distValue = (e) => {
    setCategory("");
    setDistrictChosen(true)
    setChoiceText(true);
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
      {districtChosen ? <TableData distName={districtName} category={category} />: null}
      {choiceText ? <Guide /> : null}
    </div>
  );
}

export default App;
