import React from "react";

const Button = (props) => {
    return (
      <div className="btn-group">
        <button id={props.id} value={props.value} className={props.class} onClick={props.onclick}>{props.value}</button>
      </div>
    );
}
 
export default Button;