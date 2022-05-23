import { useState, useEffect } from "react";
import Rows from "./TableRows";

const TableData = (props) => {
  const [districtData, setDistrictData] = useState({});
  // function that requests data from the server passing distName as a query parameter
  // then sets the districtData with the server data.
  async function showDistrictData() {
    let data = await fetch(`/district?place=${props.distName}`);
    let data2 = await data.json();
    setDistrictData(data2);
  }
  useEffect(() => {
    showDistrictData();
  }, [props.distName]);

  return (
    <div class="section pt-3 mx-6">
      <div class="table-container">
        {districtData ? (
          districtData[props.category] ? (
            <Rows disData={districtData} cat={props.category} />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default TableData;
