import React from "react";
import Button from "./components/Button";

const ButtonContainer = (props) => {
  // function that gets the value of the relevant button to use as an argument for the getCategory function
  // sent down as props.
  const clickHandler = (e) => {
    props.getCategory(e.target.value);
  };

  return (
    <div class="section py-0">
      <div class="columns">
        <div class="column is-3 has-text-centered">
          <Button id="1" value="pharmacies" onclick={clickHandler} />
        </div>
        <div class="column is-3 has-text-centered">
          <Button id="2" value="colleges" onclick={clickHandler} />
        </div>
        <div class="column is-3 has-text-centered">
          <Button id="3" value="hospitals" onclick={clickHandler} />
        </div>
        <div class="column is-3 has-text-centered">
          <Button id="4" value="doctors" onclick={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
