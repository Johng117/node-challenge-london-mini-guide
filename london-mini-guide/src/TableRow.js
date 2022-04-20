import React from "react";

const TableRow = (props) => {
    return (
      <div>
        <tr>
          <td className="number">{props.entryNumber}</td>
          <td className="name">{props.entry.name}</td>
          <td className="phone">{props.entry.phone}</td>
          <td className="address">{props.entry.address}</td>
          <td className="web">{props.entry.website}</td>
        </tr>
      </div>
    );
}
 
export default TableRow;