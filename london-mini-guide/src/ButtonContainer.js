import React, { useState } from "react";
import Button from "./Button";



const ButtonContainer = (props) => {

  const clickHandler = (e) => {
    props.getCategory(e.target.value)
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
