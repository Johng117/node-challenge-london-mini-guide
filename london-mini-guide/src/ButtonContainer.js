import React, { useState } from "react";
import Button from "./Button";

let initialState = [
  { id: 1, button: false },
  { id: 2, button: false },
  { id: 3, button: false },
  { id: 4, button: false },
];

const ButtonContainer = (props) => {
  const [btnColour, setBtnColour] = useState(initialState);

  const clickHandler = (e) => {
    props.getCategory(e.target.value);
    if (e.target.className === "button") {
      const newState = initialState.map((obj) => {
        return obj.id === parseInt(e.target.id)
          ? { id: obj.id, button: true }
          : { id: obj.id, button: false };
      });
      setBtnColour(newState);
    }
  };

  return (
    <div className="btn-group">
      <Button
        id="1"
        value="Pharmacies"
        class={btnColour[0].button ? "button-change" : "button"}
        onclick={clickHandler}
      />
      <Button
        id="2"
        value="schools & colleges"
        class={btnColour[1].button ? "button-change" : "button"}
        onclick={clickHandler}
      />

      <Button
        id="3"
        value="hospitals"
        class={btnColour[2].button ? "button-change" : "button"}
        onclick={clickHandler}
      />
      <Button
        id="4"
        value="doctors"
        class={btnColour[3].button ? "button-change" : "button"}
        onclick={clickHandler}
      />
    </div>
  );
};

export default ButtonContainer;
