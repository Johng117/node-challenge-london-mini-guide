import React, { useState } from "react";
import Harrow from "./Harrow.json";
import Heathrow from "./Heathrow.json";
import Stratford from "./Stratford.json";

const Table = (props) => {
  const [city, setCity]=useState(["harrow", "heathrow", "stratford"]);
    console.log(Harrow.pharmacies.slice(0,10));
    
    setCity(props.getCity)

    let entryNumber=0;

    return (
      <table>
        <tr>
          <th className="number">#</th>
          <th className="name">Name</th>
          <th className="phone">Phone</th>
          <th className="address">Address</th>
          <th className="web">Website</th>
        </tr>
        {city.pharmacies.slice(0,10).map((entry)=> {
            entryNumber++;
          return (
            <tr>
              <td className="number">{entryNumber}</td>
              <td className="name">{entry.name}</td>
              <td className="phone">{entry.phone}</td>
              <td className="address">{entry.address}</td>
              <td className="web" >{entry.website}</td>
            </tr>
          ); 
           
        })}
      </table>
    );
}
 
export default Table;