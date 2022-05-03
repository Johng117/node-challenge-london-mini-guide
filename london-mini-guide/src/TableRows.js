import React from "react";

const TableRow = (props) => {
  return (
    <>
      <table class="table is-striped is-narrow is-bordered mx-auto">
        <thead>
          <tr>
            <th class="has-text-weight-bold">Name</th>
            <th class="has-text-weight-bold">Phone number</th>
            <th class="has-text-weight-bold">Address</th>
            <th class="has-text-weight-bold">Website</th>
          </tr>
        </thead>
        <tbody>
          {props.disData[props.cat].map((entry) => {
            return (
              <tr>
                <td className="name">{entry.name}</td>
                <td className="phone">{entry.phone}</td>
                <td className="address">{entry.address}</td>
                <td className="web">{entry.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableRow;
