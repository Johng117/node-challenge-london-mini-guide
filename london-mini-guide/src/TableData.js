import { useState, useEffect } from "react";
import Row from "./TableRow";

const TableData = (props) => {
  const [districtData, setDistrictData] = useState({});

  async function showDistrictData() {
      let data = await fetch(
        `http://localhost:5000/district?place=${props.distName}`
      );
      let data2 = await data.json();
      setDistrictData(data2);
  }
  useEffect(() => {
    showDistrictData();
  }, [props.distName]);

console.log(props.category)

  return (
    <div>
      <table>
        <tr>
          <th className="number">#</th>
          <th className="name">Name</th>
          <th className="phone">Phone</th>
          <th className="address">Address</th>
          <th className="web">Website</th>
        </tr>
        {districtData ? districtData[props.category] ? districtData[props.category].map((entry) => {
          return <Row entry={entry} />;
        }) : null : null}
      </table>
      <div></div>
    </div>
  );
};

export default TableData;
