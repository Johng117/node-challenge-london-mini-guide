import React from "react";

const Buttons = (props) => {

    

    return ( 
        <div className="btn-group" onClick={props.buttonHandler}>
            <button value="pharmacies">Pharmacies</button>
            <button value="schools">schools & colleges</button>
            <button value="hospitals">hospitals</button>
            <button value="doctors">doctors</button>
        </div>
     );
}
 
export default Buttons;