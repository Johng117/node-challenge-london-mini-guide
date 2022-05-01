import React from "react";

const Button = (props) => {
    return (
      <div>
        <button class="button is-primary is-outlined has-text-black" id={props.id} value={props.value} className={props.class} onClick={props.onclick}>{props.value}</button>
      </div>
    );
}
 
export default Button;