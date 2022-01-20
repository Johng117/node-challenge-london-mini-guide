import React from "react";
import Harrow from "./Harrow.json";
const Table = () => {

    console.log(Harrow.pharmacies.slice(0,10));
    
    return (
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Website</th>
        </tr>
        {Harrow.pharmacies.slice(0,10).map((entry, key)=> {
          return <tr>
            <td></td>
            <td>{entry.name}</td>
            <td>{entry.phone}</td>
            <td>{entry.address}</td>
            <td>{entry.website}</td>
          </tr>;  
        })}
      </table>
    );
}
 
export default Table;